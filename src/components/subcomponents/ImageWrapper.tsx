import fallback from "../../assets/fallback_character.png";
import {useState} from "react";
import type {Image} from "../../types.ts";

type VisualNovelCoverProps = {
    image: Image | null;
    handleClick: (() => void) | null;
}

function ImageWrapper({image, handleClick}: VisualNovelCoverProps) {
    const [isBlurred, setIsBlurred] = useState<boolean>(image?.isSexual ?? false);

    function onImageClick() {
        if (isBlurred) {
            setIsBlurred(false);
            return;
        }
        if (handleClick) {
            handleClick();
        }
    }

    return (
        <div className="image-container">
            <img
                className={isBlurred ? "blurred" : ""}
                onClick={() => onImageClick()}
                src={image?.thumbnail ?? image?.url ?? fallback}
                alt="image"
            />
        </div>
    );
}

export default ImageWrapper;