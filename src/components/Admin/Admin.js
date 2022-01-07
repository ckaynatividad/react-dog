import React from 'react';
import { updateEnemy } from '../../services/Dogs';

export default function AdminForm({ name, level, type, image, element, handleSubmit }) {
  return (
    <div className="form">
      <form>
        <h2>Enter Cute Enemy Details</h2>
        <label>Name:</label>
        <input placeholder="Name" type="text" value={name} onChange={(e) => { updateEnemy('name', e.target.value); }} />

        <label>Level</label>
        <input placeholder="Level" type="number" value={level} onChange={(e) => { updateEnemy('level', e.target.value); }} />

        <label>Type</label>
        <input placeholder="Type" type="text" value={type} onChange={(e) => { updateEnemy('type', e.target.value); }} />

        <label>Image</label>
        <input placeholder="Image URL" type="text" value={image} onChange={(e) => { updateEnemy('image', e.target.value); }} />

        <label>Element</label>
        <input placeholder="Element" type="text" value={element} onChange={(e) => { updateEnemy('element', e.target.value); }} />

        <button onClick={handleSubmit}>Submit</button>
      </form>
            
    </div>
  );
}
