import ImageWrapper from "./ImageWrapper.tsx";
import type {Image, VisualNovel} from "../../types.ts";
import Description from "./Description.tsx";

type VisualNovelHeaderProps = {
    setSelectedImage: (image: Image) => void;
    vn: VisualNovel,
};

function VisualNovelHeader({vn, setSelectedImage}: VisualNovelHeaderProps) {


    return (
        <div className="visual-novel-header">
            <div className="cover-image-container">
                <ImageWrapper
                    image={vn.image}
                    handleClick={() => vn.image ? setSelectedImage(vn.image) : null}/>
            </div>
            <div className="visual-novel-header-info">
                <h1>{vn.title}</h1>
                {(vn.title_ja && vn.title_ja !== vn.title) && <h1>{vn.title_ja}</h1>}
                <Description description={vn.description}/>
            </div>
        </div>
    )
}

export default VisualNovelHeader;