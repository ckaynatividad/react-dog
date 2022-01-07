import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>

      <NavLink exact to="/">
                back to all doggies
      </NavLink>
      <NavLink exact to="/:id/edit">
          edit
      </NavLink>

    </header>

  );
}
