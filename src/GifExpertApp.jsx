import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ "Rick and Morty"]);

    const handleAdd = (newCategory) => {
        console.log("Nueva categoría: ", newCategory);
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    const reset = () =>{
        console.log("Limpiando las Categorías...")
        setCategories([]);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={handleAdd}
                reset={reset}
            />
            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
