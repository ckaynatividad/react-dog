import React from 'react';
import { Link } from 'react-router-dom';
import './Enemy.css';

export default function EnemyDetail(props) {
  
  return (
    <div className="detail">
      <h1>{props.name}</h1>
      <img src={props.image} />
      <p>level: {props.level}</p>
      <p>type: {props.type}</p>
      <p>element: {props.element} </p>

      <Link to={`/${props.id}/edit`}>Edit</Link>
      <button onClick={props.handleDelete}>delete enemy</button>

    </div>
  );
}
