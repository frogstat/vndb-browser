import type {Image} from "../types.ts";

function ImageOverlay({image, disableOverlay}: {image:Image, disableOverlay:() => void}) {

    return(
        <div className="overlay" onClick={() => disableOverlay()}>
            <div className="image-panel" onClick={e => e.stopPropagation()}>
                <span onClick={() => disableOverlay()}>X</span>
                <img style={{height:"100%"}} src={image.url}/>
            </div>
        </div>
    )

}

export default ImageOverlay;