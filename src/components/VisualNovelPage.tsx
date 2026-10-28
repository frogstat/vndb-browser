import CharacterGallery from "./VisualNovelPageComponents/CharacterGallery.tsx";
import VisualNovelHeader from "./VisualNovelPageComponents/VisualNovelHeader.tsx";
import type {VisualNovel} from "../types.ts";
import {useLoaderData} from "react-router-dom";
import ImageOverlay from "./VisualNovelPageComponents/ImageOverlay.tsx";
import ScreenshotsView from "./VisualNovelPageComponents/ScreenshotsView.tsx";
import {useVisualNovelOptions} from "../hooks/useVisualNovelOptions.ts";


function VisualNovelPage() {
    const vn: VisualNovel = useLoaderData();

    const {
        selectedImage,
        setSelectedImage,
        showSpoilers,
        setShowSpoilers
    } = useVisualNovelOptions();


    return (
        <>
            <div className="visual-novel-page">
                <button onClick={() => setShowSpoilers(prev => !prev)}>Toggle spoilers</button>
                <VisualNovelHeader
                    vn={vn}
                    setSelectedImage={setSelectedImage}
                />

                <CharacterGallery
                    visualNovelId={vn.id}
                    showSpoilers={showSpoilers}
                />

                <ScreenshotsView
                    screenshots={vn.screenshots}
                    setSelectedImage={setSelectedImage}
                />
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