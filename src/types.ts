// thumbnail: low quality version of the image
// url: full quality version of the image
// sexual: a rating between 0 and 2
export type Image = {
    thumbnail: string;
    url: string;
    sexual: number;
} | null;

export type Character = {
    id: string;
    name: string;
    image: {
        url: string
    } | null;
}