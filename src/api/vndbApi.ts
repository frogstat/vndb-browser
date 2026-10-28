import type {Character, Image, Role, VisualNovel} from "../types.ts";
import type {CharactersApi, CharacterResultsApi, ImageResponse, VisualNovelApi} from "./apiTypes.ts";

const VNDB_API_URL = "https://api.vndb.org/kana"

// ------------------- API CALLS
export async function fetchVisualNovel(id: string): Promise<VisualNovel | null> {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            filters: ["id", "=", id],
            fields: "title, titles{title,lang},released, image{url, thumbnail, sexual}," +
                "length_minutes, description, rating, " +
                "screenshots{url, thumbnail, sexual}"
        })
    };
    try {
        const response = await fetch(`${VNDB_API_URL}/vn`, options);
        const data: VisualNovelApi = await response.json();
        return parseVisualNovelResponse(data);
    } catch (error) {
        throw new Error(`Failed to fetch visual novel "${id}" data from API. ${error}`);
    }
}

export async function fetchCharacters(vnId: string): Promise<Character[] | null> {
    const allCharacters: CharacterResultsApi[] = [];
    for (let i = 1; ; i++) {
        const res = await fetch(`${VNDB_API_URL}/character`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                filters: ["vn", "=", ["id", "=", vnId]],
                fields: "id,name,vns{id, role, spoiler},original,sex,image{url, sexual}",
                sort: "id",
                results: 100,
                page: i
            })
        });

        if (!res.ok) {
            throw new Error(`VNDB ${res.status}: ${await res.text()}`);
        }

        const data: CharactersApi = await res.json();
        allCharacters.push(...data.results);
        if (!data.more) {
            break;
        }
    }

    return parseCharactersResponse(allCharacters, vnId);

}

/// -------------- parsers


function parseCharactersResponse(characters: CharacterResultsApi[], vnId: string): Character[] | null {
    if (!characters || !characters.length) {
        return null;
    }
    return characters.map((character: any) => {
        const role: Role = character.vns.find((v: any) => v.id === vnId)?.role ?? "unknown";
        const isSpoiler: boolean = character.vns.find((v: any) => v.id === vnId)?.spoiler ?? 0 > 0;

        let sex;
        if (character.sex) {
            sex = character.sex[0] === "m" ? "male" : character.sex[0] === "f" ? "female" : "unknown";
        } else {
            sex = "unknown";
        }

        return {
            id: character.id,
            name: character.name,
            name_original: character.original ?? null,
            sex: sex,
            image: parseImageResponse(character.image),
            role: role,
            isSpoiler: isSpoiler
        }
    });
}


function parseVisualNovelResponse(data: VisualNovelApi): VisualNovel | null {
    const results = data.results;

    if (!results || !results.length) {
        return null;
    }
    const vn = results[0];
    return {
        id: vn.id,
        title: vn.title,
        title_ja: vn.titles.find(title => title.lang === "ja")?.title ?? null,
        description: vn.description,
        released: vn.released,
        rating: vn.rating,
        image: vn.image ? parseImageResponse(vn.image) : null,
        screenshots:
            vn.screenshots.length > 0
                ? vn.screenshots.map((screenshot: any) => parseImageResponse(screenshot))
                : []
    }
}

function parseImageResponse(imageResponse: ImageResponse): Image {
    return {
        thumbnail: imageResponse?.thumbnail,
        url: imageResponse?.url,
        isSexual: imageResponse?.sexual ? imageResponse.sexual > 0.5 : false
    }

}