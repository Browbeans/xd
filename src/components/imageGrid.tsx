import { CSSProperties } from "react";
import { PexelsPhoto } from "./App";

interface Props{
    images: PexelsPhoto[]
}

function ImageGrid(props: Props) {
    return (
        <div style={rootStyle}>
            {props.images.map(image => (
                <div style={imageContainerStyle}>
                    <img src={image.src.large} style={imageStyle} alt=""/>
                    <span>{image.photographer}</span>
                </div>
            ))}
        </div>
    )
}


const rootStyle: CSSProperties = {
    display: 'flex', 
    flexWrap: 'wrap', 
}

const imageContainerStyle: CSSProperties = {
    flex: 1, 
    minWidth: '20rem', 
    margin: '2rem 0' 
}

const imageStyle: CSSProperties = {
    width: '100%'
}

export default ImageGrid;