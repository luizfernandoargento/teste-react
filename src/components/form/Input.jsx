/* eslint-disable import/no-anonymous-default-export */
// O "useState" é extraído de dentro do React (importado)
import React, { useState } from "react";

export default (props) => {
    // useState -> Retorna dois elementos: 1- O valor. 2- A função que altera o valor.
    const [nome, setNome] = useState('Pedro')
    return (
        <>
            {/* Esse H3 vai alterando conforme você digita os valores no input. */}
            <h3>{nome}</h3>
            {/* value={nome} -> Dessa forma não podemos alterar o valor do input.
                Para isso troque "nome" por "null"*/}
            <input type="text" value={nome} onChange={
                e => setNome(e.target.value)
            }/>
        </>
    )
}