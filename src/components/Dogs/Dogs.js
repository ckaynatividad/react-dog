import React from 'react';
import './Dogs.css';

export default function Dogs({ name, image }) {
  return (
    <div className="dogs">
      <img src={image} />
      <p className="words">{name}</p>
    </div>
  );
}
