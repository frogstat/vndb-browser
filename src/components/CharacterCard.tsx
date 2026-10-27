import type {Character} from "../types.ts";
import ImageWrapper from "./ImageWrapper.tsx";

function CharacterCard({character}: { character: Character }) {
    return (
        <div className="character-card">
            <div className="character-card-image-container">
                <ImageWrapper image={character.image} selectImage={null} />
            </div>
            <p>{character.name}</p>
            {(character.name_original && character.name_original !== character.name) && <p>{character.name_original}</p>}
        </div>
    )

}

export default CharacterCard;