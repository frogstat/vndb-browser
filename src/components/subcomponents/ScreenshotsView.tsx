import type {Image} from "../../types.ts";
import ImageWrapper from "./ImageWrapper.tsx";

type ScreenshotsProps = {
    screenshots: Image[],
    setSelectedImage: (screenshot: Image) => void,
}

function ScreenshotsView({screenshots, setSelectedImage}: ScreenshotsProps) {

    return (
        <div className="screenshots-section">
            <h1>Screenshots</h1>
            {screenshots.length === 0
                ? <p>No Screenshots found</p>
                : <div className="screenshots-grid">
                    {screenshots.map((image, i) =>
                        <div key={i} className="screenshot-container">
                            <ImageWrapper image={image} handleClick={() => setSelectedImage(image)}/>
                        </div>
                    )}
                </div>}
        </div>
    );
}

export default ScreenshotsView;