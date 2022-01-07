import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AdminForm from '../components/Admin/Admin';
import { createEnemy } from '../services/Enemies';
import './Admin.css';

export default function AdminEdit() {
  const [enemy, setEnemy] = useState({});

  const history = useHistory();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await createEnemy(enemy) ;
      alert('Nice');
      history.push(`/`);
    } catch {
      alert('Try again');
    }
  };

  const setUpdateEnemy = (key, value) => {
    enemy[key] = value;
    setEnemy({ ...enemy });
  };
  return (
    <div className="form2">
      <AdminForm {...enemy} handleSubmit={handleSubmit} setUpdateEnemy={setUpdateEnemy}/>

    </div>
  );
}
