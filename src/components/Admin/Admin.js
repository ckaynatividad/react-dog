import React from 'react';

export default function AdminForm({ name, setName, level, setLevel, type, setType, image, setImage, element, setElement, handleSubmit }) {
  return (
    <div className="form">
      <form>
        <h2>Enter Cute Enemy Details</h2>
        <label>Name:</label>
        <input placeholder="Name" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />

        <label>Level</label>
        <input placeholder="Level" type="number" value={level} onChange={(e) => { setLevel(e.target.value); }} />

        <label>Type</label>
        <input placeholder="Type" type="text" value={type} onChange={(e) => { setType(e.target.value); }} />

        <label>Image</label>
        <input placeholder="Image URL" type="url" value={image} onChange={(e) => { setImage(e.target.value); }} />

        <label>Element</label>
        <input placeholder="Element" type="text" value={element} onChange={(e) => { setElement(e.target.value); }} />

        <button onClick={handleSubmit}>Submit</button>
      </form>
            
    </div>
  );
}
