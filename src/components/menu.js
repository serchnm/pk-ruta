import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/menu.scss';

const menu = () => {
  const links = [
    { label: 'Dashboard', path: '/pk-ruta/build' },
    { label: 'Pokedex', path: '/pk-ruta/pokedex/build' },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <li key={link.label}>
        <NavLink 
        to={link.path}  
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
          {link.label}
        </NavLink>
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