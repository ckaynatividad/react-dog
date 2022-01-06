import React from 'react';

export default function Dogs(props) {
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  );
}
