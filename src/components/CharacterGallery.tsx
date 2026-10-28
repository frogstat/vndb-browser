import type {Character} from "../types.ts";
import CharacterSubGallery from "./CharacterSubGallery.tsx";
import {createPortal} from "react-dom";
import {useCharacterGallery} from "../hooks/useCharacterGallery.ts";
import CharacterPanel from "./CharacterPanel.tsx";

type CharacterGalleryProps = {
    visualNovelId: string;
    showSpoilers: boolean;
}

function CharacterGallery({visualNovelId, showSpoilers}: CharacterGalleryProps) {

    const {
        characters,
        selectedCharacter,
        setSelectedCharacter
    } = useCharacterGallery(visualNovelId);


    function createSubGallery(role: string, characters: Character[]) {
        if (!showSpoilers && characters.filter(c => !c.isSpoiler).length === 0) {
            return null;
        }
        if (showSpoilers && characters.length === 0) {
            return null;
        }
        return (
            <CharacterSubGallery
                role={role}
                characters={showSpoilers ? characters : characters.filter(c => !c.isSpoiler)}
                setSelectedCharacter={setSelectedCharacter}
            />
        )
    }

    if (!characters) {
        return (
            <div className="character-gallery">
                <h1>Characters</h1>
            </div>
        );
    }

    return (
        <>
            <div className="character-gallery">
                <h1>Characters</h1>
                <div className="character-groups">
                    {createSubGallery("Main Characters", characters.filter(character => character.role === "main"))}
                    {createSubGallery("Primary Characters", characters.filter(character => character.role === "primary"))}
                    {createSubGallery("Side Characters", characters.filter(character => character.role === "side"))}
                    {createSubGallery("Makes an appearance", characters.filter(character => character.role === "appears"))}
                    {createSubGallery("Unknown", characters.filter(character => character.role === "unknown"))}
                </div>
            </div>
            {selectedCharacter &&
                createPortal(
                    <CharacterPanel
                        selectedCharacter={selectedCharacter}
                        unselectCharacter={() => setSelectedCharacter(null)}/>
                    , document.body
                )
            }
        </>
    )
}

export default CharacterGallery;