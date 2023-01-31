import { useState } from "react"

export const AddCategory = ({ onNewCategory, reset }) => {
    const [inputValue, setInputValue] = useState("Breaking Bad");

    const onChange = ({ target }) => {
        setInputValue(target.value);
    }

    const resetValue = () =>{
       setInputValue('');
       reset()
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 2) return;

        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
       
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type={"text"}
                placeholder="¡Escribe para buscar Gifs animados!"
                onChange={onChange}
                value={ inputValue }
            />
            <button onClick={ onSubmit }>Buscar</button>
            <button onClick={ resetValue }>Limpiar</button>
        </form>

    )
}
