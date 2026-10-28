import type {Character} from "../../types.ts";
import ImageWrapper from "./ImageWrapper.tsx";

type CharacterCardProps = {
    character: Character;
    setSelectedCharacter: (character: Character) => void;
}

function CharacterCard({character, setSelectedCharacter}: CharacterCardProps) {

    function selectCharacter() {
        setSelectedCharacter(character);
    }

    return (
        <div className="character-card" onClick={() => selectCharacter()}>
            <div className="character-card-image-container" onClick={e => e.stopPropagation()}>
                <ImageWrapper image={character.image} handleClick={selectCharacter} />
            </div>
            <p>{character.name}</p>
            {(character.name_original && character.name_original !== character.name) && <p>{character.name_original}</p>}
        </div>
    )

}

export default CharacterCard;