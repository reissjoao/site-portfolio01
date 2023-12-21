import "./Projetos.css";

// Assets
import js from '../HomePage/assets/js.webp';
import react from '../HomePage/assets/react.webp';
import css from '../HomePage/assets/css.webp';

const Projetos = () => {
    return (
            <div class="projects" id='projetos'>
            
            <div class="project">          
            <div class="project-info">
                <img src={js} alt="Ícone Javascript"/>    
                <h3 class="project-title">Project Name</h3>
                <p class="project-description">Project description goes here.</p>
                <a href="https://www.linkedin.com/in/joao-victor-dos-reis/" target="_blank" without rel="noreferrer" class="project-link">Ver projeto</a>
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
    )
}

export default Projetos;