import React from 'react';
import { deleteEnemy } from '../../services/Dogs';

export default function DogDetail(props, handleDelete) {

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} />

      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
