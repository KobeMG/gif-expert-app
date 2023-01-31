import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

function GifGrid({ category }) {

    const { images } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(image => (
                    <GifItem key={image.id} 
                    {...image}/>
                ))}
            </div>
        </>
    );
}

export default GifGrid;