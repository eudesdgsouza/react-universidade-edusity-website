import React from "react";
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>Garantimos uma educação melhor para um mundo melhor
                </h1>
                <p>
                    Nosso currículo de ponta é projetado para capacitar os alunos com o
                    conhecimento, habilidades e experiências necessárias para se destacar na dinâmica
                    campo da educação
                </p>
                <button className="btn">
                    Explorar mais <img src={darkArrow} alt="arrow" />{" "}
                </button>
            </div>
        </div>
    );
};

export default Hero;
