import React from 'react';
import './Header.css';

function Header() {

  return (
    <header className='header'>
      <div className="logo">João Reis</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </nav>
      <button>
        Alterar tema
      </button>
    </header>
  );
}

export default Header;