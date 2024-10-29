import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="about-image" className="about-img" />
        <img
          src={playIcon}
          alt="about-image"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>SOBRE A UNIVERSIDADE</h3>
        <h2>Nutrindo hoje os líderes de amanhã</h2>
        <p>
          Embarque em uma jornada educacional transformadora com nossa universidade
          programas educacionais abrangentes. Nosso currículo de ponta é
          projetado para capacitar os alunos com o conhecimento, habilidades e
          experiências necessárias para se destacar no campo dinâmico da educação.
        </p>
        <p>
          Com foco na inovação, aprendizado prático e personalização
          mentoria, nossos programas preparam aspirantes a educadores para fazerem uma
          impacto significativo nas salas de aula, escolas e comunidades.
        </p>
        <p>
          Se você deseja se tornar professor, administrador, conselheiro ou
          líder educacional, nossa diversificada gama de programas oferece o perfeito
          caminho para atingir seus objetivos e desbloquear todo o seu potencial em
          moldando o futuro da educação.
        </p>
      </div>
    </div>
  );
};

export default About;
