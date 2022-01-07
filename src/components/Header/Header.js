import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <header>

      <NavLink exact to="/">
        <p className="linkies">home</p>
      </NavLink>
      <NavLink exact to="/:id/edit">
        <p className="linkies">add enemy</p>
      </NavLink>

    </header>

  );
}
