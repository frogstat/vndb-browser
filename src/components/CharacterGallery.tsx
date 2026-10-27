import type {Character} from "../types.ts";
import fallback from '../assets/img.png'

type CharacterGalleryProps = {
    characters: Character[];
}

function CharacterGallery({characters}: CharacterGalleryProps) {


    return (
        <div className="character-gallery">
            {characters.map((character, index) =>
                <div key={index} className="character">
                    <img src={character.image?.url ?? fallback} alt={character.name} />
                    <p>{character.name}</p>
                </div>
            )}
        </div>
    )
}

export default CharacterGallery;