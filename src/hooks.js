import React, {useState} from "react";
import uuid from "uuid";
import axios from "axios";

function useFlip(){
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
      };
    return [isFacingUp, flipCard]
}

function useAxios(url){
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
      }; 
    return [cards, addCard]
}


export {useFlip, useAxios};