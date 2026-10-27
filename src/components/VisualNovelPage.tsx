import CharacterGallery from "./CharacterGallery.tsx";
import VisualNovelHeader from "./VisualNovelHeader.tsx";
import type {Image, VisualNovel} from "../types.ts";
import {useLoaderData} from "react-router-dom";
import ImageWrapper from "./ImageWrapper.tsx";
import {useState} from "react";
import ImageOverlay from "./ImageOverlay.tsx";

function VisualNovelPage() {
    const vn: VisualNovel = useLoaderData();

    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    return (
        <>
            <div className="visual-novel-page">
                <VisualNovelHeader vn={vn} setSelectedImage={setSelectedImage}/>
                <CharacterGallery visualNovelId={vn.id}/>
                <h1>Screenshots</h1>
                {vn.screenshots.length > 0 ?
                    <div className="screenshots-grid">
                        {vn.screenshots.map((image, i) =>
                            <div key={i} className="screenshot-container">
                                <ImageWrapper image={image} selectImage={setSelectedImage} />
                            </div>
                        )}
                    </div>
                    : <p>No screenshots found.</p>
                }
            </div>
            {selectedImage &&
                <ImageOverlay
                    image={selectedImage}
                    disableOverlay={() => setSelectedImage(null)}
                />
            }
        </>
    )
}


export default VisualNovelPage;