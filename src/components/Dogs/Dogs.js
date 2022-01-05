import React from 'react';

export default function Dogs(props) {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.image} />
    </div>
  );
}
