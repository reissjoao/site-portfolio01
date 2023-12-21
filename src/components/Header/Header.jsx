import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Habilidades">Habilidades</a>
          </li>
          <li>
            <a href="/Projetos">Projetos</a>
          </li>
          <li>
            <a href="/Contatos">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;