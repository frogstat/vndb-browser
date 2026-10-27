import {getVisualNovel} from "../api/vndbApi.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {useEffect, useState} from "react";
import VisualNovelHeader from "./VisualNovelHeader.tsx";

function VisualNovelPage() {

    const [vn, setVn] = useState<any>(null);

    useEffect(() => {
        getVisualNovel("v4")
            .then(data => setVn(data.results[0]));
    }, [])

    return (
        <>
            {vn &&
                <div>
                    <VisualNovelHeader vn={vn}/>
                    {vn.va.length > 0 && <CharacterGallery characters={vn.va.map((va:any) => va.character)}/>}
                </div>
            }
        </>
    )
}



export default VisualNovelPage;