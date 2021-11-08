import React from "react";
import { Input } from "features/Input";
import "./soma.css";

export const Soma : React.FC = () => {

    const operacao = () => {
        const numero1 = document.getElementById("n1") as HTMLInputElement
        const numero2 = document.getElementById("n2") as HTMLInputElement
        const conta = parseInt(numero1.value) + parseInt(numero2.value)
        const resultadoConta = document.getElementById("numeroTela") as HTMLParagraphElement
        resultadoConta.innerHTML = conta.toString()
    }

    return (
        <div className="App">
            <h1>{process.env.REACT_APP_NAME_HOME}</h1>
            <div id="botaoInput">
                <Input id="n1"/>
                <Input id="n2"/>
                <div className="botao">
                    <button onClick={operacao}>+</button>
                </div>
                <div className="label">
                    <label id="numeroTela"> </label>
                </div>
            </div>
        </div>
    )
}
