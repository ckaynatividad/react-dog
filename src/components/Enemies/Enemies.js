import React from 'react';
import './Enemies.css';

export default function Enemies({ name, image }) {
  return (
    <div className="enemies">
      <img src={image} />
      <p className="words">{name}</p>
    </div>
  );
}
