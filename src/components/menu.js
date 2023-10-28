import React from 'react';
import Link from './link';

const menu = () => {
  const links = [
    { label: 'Dashboard', path: '/pk-ruta/build' },
    { label: 'Pokedex', path: '/pk-ruta/pokedex/build' },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <li cla>
        <Link 
        key={link.label} 
        to={link.path}  
        activeClassName="is-active"
      >
          {link.label}
        </Link>
      </li>
      )
  });
  return (
    <div>
      <aside className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          {renderedLinks}
        </ul>
      </aside>
    </div>
  )
}

export default menu