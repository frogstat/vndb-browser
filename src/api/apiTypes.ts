import type {Image, Trait} from "../types.ts";

export type VisualNovelApi = {
    more: boolean;
    results: {
        id: string;
        title: string;
        titles: {
            lang: string;
            title: string;
        }[];
        description: string;
        released: string;
        rating: number;
        image: ImageResponse;
        screenshots: Image[];
    }[];
};

export type CharactersApi = {
    more: boolean;
    results: CharacterResultsApi[]
};

export type CharacterResultsApi = {
    id: string;
    name: string;
    original?: string;
    sex: [string, string] | null;
    image: ImageResponse;
    vns: {
        id: string;
        role: string;
        spoiler: number;
    }[]
}[];

export type ImageResponse = {
    thumbnail?: string;
    url: string;
    sexual: number;
}

export type FullCharacterApi = {
    more: boolean;
    results: {
        id: string;
        name: string;
        original: string | null;
        aliases: string[];
        description: string | null;
        height: number | null;
        age: number | null;
        sex: [string, string];
        traits: TraitApi[];
    }[];
}

export type TraitApi = {
    group_name: string;
    id: string;
    name: string;
    spoiler: number;
}

export type VisualNovelSearch = {
    more: boolean;
    results: VisualNovelSearchResult[]
}

export type VisualNovelSearchResult = {
    id: string;
    title: string;
    image: ImageResponse;
}