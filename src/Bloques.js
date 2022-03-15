import React, { useState } from 'react'

const Bloques = () => {
    const [color, setColor] = useState("");
    const [bloques, setBloques] = useState([]);

    const CreateBlock = (e) => {
        e.preventDefault();
        setBloques([...bloques, color])
        setColor("");
    };

    return (
        <div className="container">
            <form onSubmit={ CreateBlock }>
                <div>
                    <label>Color: </label> 
                    <input type="text" onChange={ (e) => setColor(e.target.value) } value={color}/>
                </div>
                <input type="submit" value="Add" />
            </form>
            <div className="bloques">
                {bloques.map(bloque => (
                    <div style={{backgroundColor: bloque}} className="bloque"></div>
                ))}
            </div>
        </div>
    )
}

export default Bloques