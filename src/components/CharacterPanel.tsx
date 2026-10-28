import fallback from "../assets/fallback_character.png";
import type {Character} from "../types.ts";
import {useCharacterPanel} from "../hooks/useCharacterPanel.ts";
import CharacterPanelInfo from "./CharacterPanelInfo.tsx";

type CharacterPanelProps = {
    selectedCharacter: Character;
    unselectCharacter: () => void;
}

function CharacterPanel({selectedCharacter, unselectCharacter}: CharacterPanelProps) {

    const fullCharacter = useCharacterPanel(selectedCharacter);


    return (
        <div className="overlay" onClick={() => unselectCharacter()}>
            <div className="character-panel" onClick={e => e.stopPropagation()}>

                <div className="character-panel-header">
                    <span onClick={() => unselectCharacter()}>X</span>
                </div>

                <div className="character-panel-body">
                    <div className="character-panel-image-container">
                        <img src={selectedCharacter.image?.url ?? fallback}/>
                    </div>
                    <div className="character-panel-character-info">
                        {fullCharacter && <CharacterPanelInfo fullCharacter={fullCharacter}/>}
                    </div>
                </div>

            </div>
        </div>
    )

}

export default CharacterPanel;