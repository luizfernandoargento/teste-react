/* eslint-disable import/no-anonymous-default-export */

// Esse arquivo pode também ser criado com extensão "js".
import React from "react"

// Essa function não precisa de nome.
export default () =>
    // Não podemos retornar duas tags juntas, por isso podemos envolver em
    // "<>...</>", ou "<div>...</div>", ou "<React.Fragment>...</React.Fragment>"
    <>
        <h1>Primeiro Componente (Função Arrow)</h1>
        <h2>Exemplo de componente React</h2>
    </>