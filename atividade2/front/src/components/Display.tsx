import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";
import Ball from "./Ball";

export default function Display() {
    const {input} = useContext(LetterCtx);
    if (!input) {return <div>Sem entrada</div>;}
    return <div>{input.split('').map((letter, index) => (<Ball key={index} letter={letter} />))}</div>;
}