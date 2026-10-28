import type {Character} from "../../types.ts";
import CharacterCard from "./CharacterCard.tsx";
import {useState} from "react";

type CharacterSubGalleryProps = {
    role: string
    characters: Character[];
    setSelectedCharacter: (character: Character) => void;
}

function CharacterGallery({role, characters, setSelectedCharacter}: CharacterSubGalleryProps) {
    const [hidden, setHidden] = useState<boolean>(false)


    return (
        <div className="character-subgallery">
            <p
                style={{cursor: "pointer"}}
                onClick={() => setHidden(prev => !prev)}>
                {`${role} ${hidden ? "↓" : "↑"}`}
            </p>
            <div className={`character-grid-wrapper ${hidden ? "hidden" : ""}`}>
                <div className="character-grid">
                    {characters
                        .map((character, index) =>
                        <CharacterCard key={index} character={character} setSelectedCharacter={setSelectedCharacter}/>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CharacterGallery;