import React from 'react';
import './Habilidades.css';

function Habilidades() {
    return (
        <div className="tecnology" id='tecnology'>
            <h2 className='tecnology-title'>Tecnologias</h2>
            <ul>
                <li>
                    <i class="fa-brands fa-js"></i>
                </li>
                <li>
                    <i class="fa-brands fa-react"></i>
                </li>
                <li>
                    <i class="fa-brands fa-css3-alt"></i>
                </li>
                <li>
                    <i class="fa-brands fa-html5"></i>
                </li>
                <li>
                    <i class="fa-brands fa-git-alt"></i>
                </li>
                <li>
                    <i class="fa-brands fa-bootstrap"></i>
                </li>
                <li>
                    <i class="fa-brands fa-wordpress"></i>
                </li>
            </ul>
        </div>
    );
}

export default Habilidades;