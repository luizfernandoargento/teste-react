/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Filho from "./Filho"

export default props =>
    <div>
        {/* ...props -> Cria novo objeto e passa todas propriedades do Pai para Filho. */}
        <Filho {...props}>João</Filho>
        {/* props.sobrenome -> Passa só uma propriedade para o Filho. */}
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>