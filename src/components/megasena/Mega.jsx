/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
    // Cria array com quantidade de números "qtNumero" e preenchido com zeros (fill).
    const [numeros, setNumeros] = useState(Array(props.qtNumero).fill(0));

    function gerarNumerosNaoContido(array) {
        const min = 1;
        const max = 61;
        const novoNumero = parseInt(Math.random() * (max - min)) + min;
        // Verifica se o novoNumero é repetido no array. Se for, chama o método novamente.
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array)
            : novoNumero;
    }

    function gerarNumeros() {
        // reduce((a, e) => {}, []) -> a=array acumulado, e=elemento atual,
        // {}=lógica, []=array inicial vazio.
        const novoArray = Array(props.qtNumero)
            .fill(0)
            .reduce((a, e) => {
                // Teste console sobre resultado do reduce:
                const novoNumero = gerarNumerosNaoContido(a);
                console.log(
                    "Array inicial: " + a,
                    "|Próx item array: " + e,
                    "|Número gerado: " + novoNumero
                );
                return [...a, novoNumero];
            }, [])
            .sort((a, b) => a - b);
        setNumeros(novoArray);
    }

    return (
        <>
            <h3>Mega Sena</h3>
            <h4>{numeros.join(" - ")}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    );
};
