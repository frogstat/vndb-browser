import fallback from "../assets/fallback_character.png";
import type {Character} from "../types.ts";

type CharacterPanelProps = {
    selectedCharacter: Character;
    unselectCharacter: () => void;
}

function CharacterPanel({selectedCharacter, unselectCharacter}: CharacterPanelProps) {



    return (
        <div className="overlay" onClick={() => unselectCharacter()}>
            <div className="character-panel" onClick={e => e.stopPropagation()}>
                <div className="character-panel-header">
                    <span onClick={() => unselectCharacter()}>X</span>
                </div>
                <div className="character-panel-body">
                    <img src={selectedCharacter.image?.url ?? fallback}/>
                </div>
            </div>
        </div>
    )

}

export default CharacterPanel;