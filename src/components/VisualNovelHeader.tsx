import ImageWrapper from "./ImageWrapper.tsx";
import type {Image, VisualNovel} from "../types.ts";

type VisualNovelHeaderProps = {
    setSelectedImage: (image: Image) => void;
    vn: VisualNovel,
};

function VisualNovelHeader({vn, setSelectedImage}: VisualNovelHeaderProps) {

    return (
        <div className="visual-novel-header">
            <h1>{vn.title}</h1>
            {(vn.title_ja && vn.title_ja !== vn.title) && <h1>{vn.title_ja}</h1>}
            <p>{vn.description}</p>
            <div className="cover-image-container">
                <ImageWrapper image={vn.image} selectImage={setSelectedImage}/>
            </div>
        </div>
    )
}

export default VisualNovelHeader;