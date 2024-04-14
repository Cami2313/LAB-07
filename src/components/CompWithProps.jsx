import React, { useState } from 'react';

export const CompWithProps = () => {

    const [inputText, setInputText] = useState('');

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    return (
        <>
            <input
                type = "text"
                value = {inputText}
                onChange = {handleInputChange}
                placeholder = "Escribe aquí..."
            />
            <div>
                <h2>User: {inputText}</h2>
            </div>
        </>
    );
}
