import {useEffect, useState} from "react";
import type {Character, FullCharacter} from "../types.ts";
import {fetchCharacter} from "../api/vndbApi.ts";

export function useCharacterPanel(character: Character){
    const [fullCharacter, setFullCharacter] = useState<FullCharacter | null>(null);

    useEffect(() => {
        fetchCharacter(character.id)
            .then(setFullCharacter)
    }, [character]);

    return fullCharacter;
}