import "./Contador.css";
import React, { Component } from "react";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

export default class Contador extends Component {
    // Recebe do App o valor de "passo" que foi informado (no caso 10).
    // O "props" está disponível em qualquer lugar da classe.
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    };

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo,
        });
    };

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo,
        });
    };

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm
                    passo={this.state.passo}
                    onPassoChange={this.mudarPasso}>
                </PassoForm>
                <Display
                    valor={this.state.valor}>
                </Display>
                <Botoes
                    onIncrementar={this.incrementar}
                    onDecrementar={this.decrementar}
                ></Botoes>
            </div>
        );
    }
}
