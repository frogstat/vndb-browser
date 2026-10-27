import type {Character} from "../types.ts";
import {useEffect, useState} from "react";
import CharacterSubGallery from "./CharacterSubGallery.tsx";
import {fetchCharacters} from "../api/vndbApi.ts";


type CharacterGalleryProps = {
    visualNovelId: string;
}

function CharacterGallery({visualNovelId}: CharacterGalleryProps) {

    const [characters, setCharacters] = useState<Character[] | null>([]);

    useEffect(() => {
        let cancelled = false;
        setCharacters(null);
        fetchCharacters(visualNovelId)
            .then(data => {
                if (!cancelled) {
                    setCharacters(data)
                }
            });
        return () => {cancelled = true};
    }, [visualNovelId]);


    function createSubGallery(role: string, characters: Character[]) {
        if (characters.length === 0) {
            return null;
        }
        return (
            <CharacterSubGallery role={role} characters={characters}/>
        )
    }


    return (
        <div className="character-gallery">
            <h1>Characters</h1>
            {characters && <div className="character-groups">
                {createSubGallery("Main Characters", characters.filter(character => character.role === "main"))}
                {createSubGallery("Primary Characters", characters.filter(character => character.role === "primary"))}
                {createSubGallery("Side Characters", characters.filter(character => character.role === "side"))}
                {createSubGallery("Makes an appearance", characters.filter(character => character.role === "appears"))}
                {createSubGallery("Unknown", characters.filter(character => character.role === "unknown"))}
            </div>}
        </div>
    )
}

export default CharacterGallery;