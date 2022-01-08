import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AdminForm from '../../components/Admin/Admin';
import { createEnemy } from '../../services/Enemies';
import './AddEnemy.css';

export default function AddEnemy() {
  const [enemy, setEnemy] = useState({});

  const history = useHistory();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await createEnemy(enemy) ;
      alert('Nice, added');
      history.push(`/`);
    } catch {
      alert('Try again');
    }
  };

  const setNew = (key, value) => {
    enemy[key] = value;
    setEnemy({ ...enemy });
  };
  return (
    <div className="form2">
      <AdminForm enemy={enemy} handleSubmit={handleSubmit} setNew={setNew}/>

    </div>
  );
}
