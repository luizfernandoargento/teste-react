/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            {/* Altera valor de "passo" dinamicamente. O sinal "+" evita uma String no input. */}
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.onPassoChange(+e.target.value)}
            />
        </div>
    );
};
