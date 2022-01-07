import React from 'react';

export default function DogDetail(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} />
    </div>
  );
}
