import { useState } from "react";

export const RandomComponent = () => {

    const [number, setRandomNumber] = useState(getRandomNumber());

    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handlerButton() {
        const randomNumber = getRandomNumber();
        setRandomNumber(randomNumber);
    }

    return (
        <div>
            <h2>Number: { number }</h2>
            <button onClick={ handlerButton }>Generate New Number</button>
        </div>
    );
}
