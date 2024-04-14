import { useState } from "react";

export const Button = props => {

    const { text } = props;

    function randomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handlerButton() {
        const getNumber = randomNumber();
        alert(`Alert! ${getNumber}`);
    }

    return (
        <button onClick={ handlerButton }>
            { text }
        </button>
    );
}
