import type {Image} from "../types.ts";

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
    sex: [string, string];
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