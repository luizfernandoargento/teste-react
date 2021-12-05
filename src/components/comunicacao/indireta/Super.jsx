/* eslint-disable import/no-anonymous-default-export */
// useState -> Para trabalhar com propriedades que podem ser modificadas. 
import React, { useState } from "react";
import Sub from "./Sub";

export default (props) => {

    // destructuring -> expressão Javascript que extrai array/objetos para variáveis.
    //Ex: [a,b,...resto] = [1,2,3,4,5]. a=1, b=2, resto=[3,4,5].
    const [texto, setTexto] = useState('Valor')
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub aoClicar={quandoClicar}></Sub>
        </div>
    );
};
