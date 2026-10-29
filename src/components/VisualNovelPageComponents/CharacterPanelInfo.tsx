import type {FullCharacter} from "../../types.ts";
import Description from "./Description.tsx";

function CharacterPanelInfo({fullCharacter}: { fullCharacter: FullCharacter }) {

    return (
        <>
            <div className="character-panel-names">
                <p className="name-large">{fullCharacter.name}</p>
                <p className="name-original">{fullCharacter.name_original}</p>
            </div>
            <div className="character-panel-sex-height-location">
                <div className="keys">
                    <p>SEX</p>
                    <p>HEIGHT</p>
                    <p>AGE</p>
                </div>
                <div className="values">
                    <p>{fullCharacter.sex}</p>
                    <p>{fullCharacter.height ?? "?"}</p>
                    <p>{fullCharacter.age ?? "?"}</p>
                </div>
            </div>
            <div className="character-panel-description">
                <Description description={fullCharacter.description ?? ""}/>
            </div>
            <div className="all-traits">
                {fullCharacter.traits &&
                    Object.entries(fullCharacter.traits)
                        .filter(k => !k[0].toLowerCase().includes("sexual"))
                        .map(([name, traits]) =>
                        <div key={name} className="trait-category">
                            <p>{name}</p>
                            <div className="traits">
                                {traits.map((trait) => (
                                    <span key={trait.id}>{trait.name}</span>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CharacterPanelInfo;