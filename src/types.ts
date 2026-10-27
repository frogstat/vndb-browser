export type VisualNovelRESTResponse = {
    more: boolean,
    results: [
    ]
}

export type VNRESTResult = {
    id: string
    title: string,
    original: string,
    description: string,
    released: string,
    rating: number,
    image: Image,
    va: Va[]
    screenshots: Image[]
}

type Va = {
    character: Character;
}

export type VisualNovel = {
    id: string; // example: v3221
    title: string;
    original: string; // Title in the original language
    description: string;
    released: string; // yyyy-mm-dd
    rating: number; // score between 0-100
    image: Image;
    screenshots: Image[]; // can be empty if none exist
    characters: Character[];
}



export type Image = {
    thumbnail?: string;
    url: string;
    sexual: number;
} | null;

export type Character = {
    id: string;
    name: string;
    sex: string;
    image: Image;
}