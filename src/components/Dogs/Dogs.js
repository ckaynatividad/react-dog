import React from 'react';
import './Dogs.css';

export default function Dogs({ name, image }) {
  return (
    <div>
      <img src={image} />
      <p>{name}</p>
    </div>
  );
}
