import React from 'react';
import './Admin.css';

export default function AdminForm({ enemy, setNew, handleSubmit }) {
  return (
    <div className="form">
      <form>
        <label>name</label>
        <input placeholder="name" type="text" value={enemy.name} onChange={(e) => { setNew('name', e.target.value); }} />

        <label>level</label>
        <input placeholder="level" type="number" value={enemy.level} onChange={(e) => { setNew('level', e.target.value); }} />

        <label>type</label>
        <input placeholder="type" type="text" value={enemy.type} onChange={(e) => { setNew('type', e.target.value); }} />

        <label>image</label>
        <input placeholder="image url" type="text" value={enemy.image} onChange={(e) => { setNew('image', e.target.value); }} />

        <label>element</label>
        <input placeholder="element" type="text" value={enemy.element} onChange={(e) => { setNew('element', e.target.value); }} />

        <p><button onClick={handleSubmit}>submit</button>
        </p>
    
      </form>
            
    </div>
  );
}
