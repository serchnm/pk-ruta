import React from 'react'

const menu = () => {
  return (
    <div>
      <aside className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><a href='/'>Dashboard</a></li>
          <li><a href='/pokedex'>Pokedex</a></li>
        </ul>
      </aside>
    </div>
  )
}

export default menu