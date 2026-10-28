import {useEffect, useState} from "react";
import type {Character} from "../types.ts";
import {fetchCharacters} from "../api/vndbApi.ts";

export function useCharacterGallery(visualNovelId:string) {
    const [characters, setCharacters] = useState<Character[] | null>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    useEffect(() => {
        let cancelled = false;
        setCharacters(null);
        fetchCharacters(visualNovelId)
            .then(data => {
                if (!cancelled) {
                    setCharacters(data)
                }
            });
        return () => {
            cancelled = true
        };
    }, [visualNovelId]);

    return {
        characters,
        selectedCharacter,
        setSelectedCharacter,
    }
}