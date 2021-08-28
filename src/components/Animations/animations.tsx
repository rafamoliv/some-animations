import React from 'react'
import "./style.css";
import mapa from './assets/quadrante_vtex_2021.webp'
import foguete from './assets/foguete-acct.gif'
import pc from './assets/computer.png'
import lady from './assets/lady.png'
import gentleman from './assets/gentleman.png'
import ladyComputer from './assets/lady_computer.png'
import cacto from './assets/cacto.png'
import cotonete from './assets/cotonete.png'
import pedra from './assets/pedra.png'
import pontinho from './assets/pontinho.png'
import pontinhoAmarelo from './assets/pontinhoAmarelo.png'
import folha from './assets/folha.png'

function Animations() {
    return (
        <div className="container">
            <h1>teste</h1>

            <div className="img-slide-2">
                <div className="img-perspective">
                    <div className="pc-section">
                        <img src={pc} className="pc" alt="pc" />
                        <img src={lady} className="lady" alt="lady" />
                        <img src={gentleman} className="gentleman" alt="gentleman" />
                        <img src={ladyComputer} className="ladyComputer" alt="lady computer" />
                        <img src={cacto} className="cacto" alt="cacto" />
                        <img src={cotonete} className="cotonete" alt="cotonete" />
                        <img src={pedra} className="pedra" alt="pedra" />
                        <img src={pontinho} className="pontinho" alt="pontinho" />
                        <img src={pontinhoAmarelo} className="pontinhoAmarelo" alt="pontinho amarelo" />
                        <img src={folha} className="folha" alt="folha" />
                    </div>
                </div>
            </div>

            <div className="button-animated">
                <button className="button-text">Saiba mais e inscreva-se</button>
            </div>

            <div className="img-container">
                <div className="containerFlip">
                    <div className="flipper">
                        <img src={mapa} className="mapaQuadrado" alt="mapa quadrado" />
                    </div>
                    <img src={foguete} className="fogueteACCT" alt="foguete ACCT" />
                </div>
            </div>

        </div>
    )
}

export default Animations
