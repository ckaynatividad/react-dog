import React from 'react';
import './Admin.css';

export default function AdminForm({ name, level, type, image, element, handleSubmit, setUpdateEnemy }) {
  return (
    <div className="form">
      <form>
        <label>name</label>
        <input placeholder="name" type="text" value={name} onChange={(e) => { setUpdateEnemy('name', e.target.value); }} />

        <label>level</label>
        <input placeholder="level" type="number" value={level} onChange={(e) => { setUpdateEnemy('level', e.target.value); }} />

        <label>type</label>
        <input placeholder="type" type="text" value={type} onChange={(e) => { setUpdateEnemy('type', e.target.value); }} />

        <label>image</label>
        <input placeholder="image url" type="text" value={image} onChange={(e) => { setUpdateEnemy('image', e.target.value); }} />

        <label>element</label>
        <input placeholder="element" type="text" value={element} onChange={(e) => { setUpdateEnemy('element', e.target.value); }} />

        <p><button onClick={handleSubmit}>submit enemy</button>
        </p>
      </form>
            
    </div>
  );
}
