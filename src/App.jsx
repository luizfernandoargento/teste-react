/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

export default (props) => (
    <div className="App">
        <Card titulo="6- Condicional com IF" color="#FA6900">
            {/* numero="10" -> Esse é String, para passar número tem que ser entre chaves. */}
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="5- Condicional v1" color="#3DA4AB">
            {/* numero="10" -> Esse é String, para passar número tem que ser entre chaves. */}
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="4- Repetição" color="#008BBA">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="3- Componente Com Filhos" color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Fernando</li>
                    <li>Ana</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="2- Componente Com Parâmetro" color="#92B06A">
            <ComParametro
                titulo="Esse é o título"
                subtitulo="Esse é o subtítulo"
            />
        </Card>
        <Card titulo="1- Primeiro Componente" color="#fed766">
            <Primeiro />
        </Card>
    </div>
);
