import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import DogsView from '../../views/DogsList';

export default function Header() {
  return (
    <header>

      <NavLink exact to="/">
                back to all doggies
      </NavLink>

    </header>

  );
}
