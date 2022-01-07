import React from 'react';
import { deleteEnemy } from '../../services/Dogs';
import './Dog.css';

export default function DogDetail(props, handleDelete) {

  return (
    <div className="detail">
      <h1>{props.name}</h1>
      <img src={props.image} />
      <p>level: {props.level}</p>
      <p>type: {props.type}</p>
      <p>element: {props.element} </p>

      <button onClick={handleDelete}>delete enemy</button>
    </div>
  );
}
