import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import AdminForm from '../components/Admin/Admin';
import { fetchDogId, updateEnemy, createEnemy } from '../services/Dogs';

export default function AdminEdit() {
  const [dog, setDog] = useState({});

  const history = useHistory();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await createEnemy(dog) ;
      alert('Nice');
      history.push(`/`);
    } catch {
      alert('Try again');
    }
  };

  const updateEnemy = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };
  return (
    <div>
      <h2>Edit Cute Enemy</h2>
      <AdminForm {...dog} handleSubmit={handleSubmit} updateEnemy={updateEnemy}/>

    </div>
  );
}
