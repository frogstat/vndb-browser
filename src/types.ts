
export type VisualNovel = {
    id: string; // example: v3221
    title: string;
    title_ja: string | null; // Title in Japanese
    description: string;
    released: string; // yyyy-mm-dd
    rating: number; // score between 0-100
    image: Image | null;
    screenshots: Image[]; // can be empty if none exist
}

export type Image = {
    thumbnail?: string;
    url: string;
    isSexual: boolean;
};

export type Character = {
    id: string;
    name: string;
    name_original: string | null;
    sex: string;
    image: Image | null;
    role: Role;
    isSpoiler: boolean;
}

export type FullCharacter = {
    id: string,
    name: string,
    name_original: string | null,
    aliases: string | null,
    description: string | null,
    height: string | null,
    age: number | null,
    sex: string,
    traits: Record<string, Trait[]>,
}

export type Role = "main" | "primary" | "side" | "appears" | "unknown"

export type Trait = {
    group_name: string;
    id: string;
    name: string;
    isSpoiler: boolean;
}

export type VisualNovelCardResult = {
    id: string;
    title: string;
    image: Image | null;
}