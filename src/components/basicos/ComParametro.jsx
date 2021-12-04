/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

// "props" é o nome dado ao atributo que vai acessar os atributos Javascript.
// Além disso é somente leitura, não podendo alterar seus valores.
export default props =>
    // O que estiver dentro das chaves é interpretado como Javascript.
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>