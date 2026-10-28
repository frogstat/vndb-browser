import {useState} from "react";
import type {Image} from "../types.ts";

export function useVisualNovelOptions(){
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [showSpoilers, setShowSpoilers] = useState<boolean>(false);

    return{
        selectedImage,
        setSelectedImage,
        showSpoilers,
        setShowSpoilers,
    }

}