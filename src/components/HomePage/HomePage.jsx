import React from 'react';
import './HomePage.css';

// Assets
import perfil from './assets/FOTO.webp';

function HomePage() {
  return (
    <div className="home-page" id='home-page'>
      <div className="intro-container">
        <div className="intro-text">
          <h2>Desenvolvedor Full Stack</h2>
          <h1>João Reis</h1>
          <p>Olá mundo! Sou desenvolvedor Front-End em Curitiba/PR, entusiasmado em explorar o mundo de desenvolvimento de software e sites. Embora eu seja relativamente novo na área, sigo sempre animado para aprender e crescer como desenvolvedor. Atualmente estou cursando Análise e Desenvolvimento de Sistemas pelo Centro Universitário UniDBSCO, e desempenhando o cargo de estagiário como desenvolvedor Web pela Startup <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/3mindconsultoria/mycompany/verification/">3MIND Marketing e Tecnologia</a>.</p>
          <nav>
            <ul className='navegation-icons'>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/joaoreiss_/">
                <li><i class="fa-brands fa-instagram"></i></li>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joao-victor-dos-reis/">
                <li><i class="fa-brands fa-linkedin"></i></li>  
              </a>              
              <a target="_blank" rel="noreferrer" href="https://github.com/reissjoao">
                <li><i class="fa-brands fa-github"></i></li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="intro-image">          
            <img src={perfil} alt="Foto perfil Github" />          
        </div>
      </div>
    </div>    
  );
}

export default HomePage;