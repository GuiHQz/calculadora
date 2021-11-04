import React,{useState} from "react";
import './soma.css'

export const Soma: React.FC = () => {

    const operacao = () => {
        
    }

    return (
        <div className="App">
            <h1>Calculadora</h1>
            <div id="botaoInput">
                <input id="n1" type="number" />
                <input id="n2" type="number" />
                <div className="botao">
                    <button onClick={operacao}>+</button>
                </div>
            </div>
        </div>
    )
}