import type {VNRESTResult} from "../types.ts";

const VNDB_API_URL = "https://api.vndb.org/kana/vn"

function parseApiResult(response:VNRESTResult){





}


export async function getVisualNovel(id: string){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"filters":["id","=","${id}"],"fields":"title,released, image{url, thumbnail, sexual}, length_minutes, description, rating, screenshots{url, thumbnail, sexual}, va{character{id,name,image{url}}}"}`
    };
    const response = await fetch(VNDB_API_URL, options);
    return await response.json();
}



getVisualNovel("v17")
    .then(console.log);
