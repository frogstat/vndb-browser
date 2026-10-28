import fallback from "../assets/fallback_character.png";
import {useState} from "react";
import type {Image} from "../types.ts";

type VisualNovelCoverProps = {
    image: Image | null;
    selectImage: ((image: Image) => void) | null;
}

function ImageWrapper({image, selectImage}: VisualNovelCoverProps) {
    const [isBlurred, setIsBlurred] = useState<boolean>(image?.isSexual ?? false);

    function handleClick() {
        if (isBlurred) {
            setIsBlurred(false);
            return;
        }
        if (image && selectImage) {
            selectImage(image);
        }
    }

    return (
        <div className="image-container">
            <img
                className={isBlurred ? "blurred" : ""}
                onClick={() => handleClick()}
                src={image?.thumbnail ?? image?.url ?? fallback}
                alt="image"
            />
        </div>
    );
}

export default ImageWrapper;