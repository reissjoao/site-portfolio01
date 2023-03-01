import React from 'react';
import './HomePage.css';
import js from './assets/js.png';
import html from './assets/html5.png';
import react from './assets/react.png';
import css from './assets/css.png'

function HomePage() {
  return (
    <div className="home-page">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Olá mundo, eu sou o João Reis!</h1>
          <p>Bem vindos ao meu Site de portfólio.</p>
          <p>Eu sou desenvolvedor Front-End em Curitiba/PR. Estou cursando Análise e Desenvolvimento de Sistemas pelo Centro Universitário UniDBSCO. Atualmente atuo como estagiário em desenvolvimento Web pela Startup <a href="https://www.linkedin.com/company/3mindconsultoria/mycompany/verification/">3MIND Marketing e Tecnologia</a>.</p>
        </div>
        <div className="intro-image">
          <img src="https://github.com/reissjoao.png" alt="Intro Image" />
        </div>
      </div>
      <div className="latest-posts">
        <h2>Últimas publicações</h2>
        <ul>
          <li>
            <a href="#">Post 1</a>
            <span>Fev 28, 2023</span>
          </li>
          <li>
            <a href="#">Post 2</a>
            <span>Fev 27, 2023</span>
          </li>
          <li>
            <a href="#">Post 3</a>
            <span>Fev 26, 2023</span>
          </li>
        </ul>
      </div>
      <div class="projects">
        
        <div class="project">          
          <div class="project-info">
            <img src={js} alt="Ícone Javascript"/>    
            <h3 class="project-title">Project Name</h3>
            <p class="project-description">Project description goes here.</p>
            <a href="#" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
          </div>
        </div>        
        
        <div class="project">
          <div class="project-info">
            <img src={react} alt="Ícone React"/>
            <h3 class="project-title">Alura Space</h3>
            <p class="project-description">Project description goes here.</p>
            <a href="https://github.com/reissjoao/alura-space" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
          </div>
        </div>
        
        <div class="project">
          <div class="project-info">
            <img src={css} alt="Ícone CSS"/>
            <h3 class="project-title">Alura Play</h3>
            <p class="project-description">Project description goes here.</p>
            <a href="https://github.com/reissjoao/alura-play" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
          </div>
        </div>
        
        <div class="project">
          <div class="project-info">
            <img src={react} alt="Ícone React"/>
            <h3 class="project-title">Organo World Cup</h3>
            <p class="project-description">Project description goes here.</p>
            <a href="https://github.com/reissjoao/organo-world-cup" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
          </div>
        </div>
        
        <div class="project">
          <div class="project-info">
            <img src={js} alt="Ícone Javascript"/>
            <h3 class="project-title">Jogo número secreto</h3>
            <p class="project-description">Project description goes here.</p>
            <a href="https://github.com/reissjoao/jogo-numero-secreto" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
          </div>
        </div>
        
        <div class="project">
          <div class="project-info">
            <img src={js} alt="Ícone Javascript"/>
            <h3 class="project-title">Validação de Formulário</h3>
            <p class="project-description">Project description goes here.</p>
            <a href="https://github.com/reissjoao/Form-validation" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default HomePage;