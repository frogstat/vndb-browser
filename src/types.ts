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
    sexual: number;
};

export type Character = {
    id: string;
    name: string;
    name_original:string | null;
    sex: string;
    image: Image;
    role: Role;
    isSpoiler: boolean;
}

export type Role = "main" | "primary" | "side" | "appears" | "unknown"