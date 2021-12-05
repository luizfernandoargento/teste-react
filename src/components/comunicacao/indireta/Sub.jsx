/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {

    // Essa função possui parâmetro evento "e", mas como não usamos, não precisa.
    function acao(){
        props.aoClicar(Math.random(), 'Gerado')
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
            {/* Poderia ser feito eliminando a função "acao" e adicionando em onClick:
                <button onClick={() => { props.onClicar(Math.random()) }}>Alterar</button>
             */}
        </div>
    );
};
