import React from 'react';
import './Enemy.css';

export default function EnemyDetail(props) {
  
  return (
    <div className="detail">
      <h1>{props.name}</h1>
      <img src={props.image} />
      <p>level: {props.level}</p>
      <p>type: {props.type}</p>
      <p>element: {props.element} </p>

      <button onClick={props.handleDelete}>delete enemy</button>
    </div>
  );
}
