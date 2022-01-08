import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import AdminForm from '../../components/Admin/Admin';
import { fetchEnemyId, updateEnemy } from '../../services/Enemies';

export default function EnemyEdit(props) {
  const [enemy, setEnemy] = useState({});

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEnemyId(props.match.params.id);
      setEnemy(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await updateEnemy(enemy);
      alert('Updated');
      history.push(`/${enemy.id}`);
    } catch {
      alert('Update failed');
    }
  };


  const setNew = (key, value) => {
    enemy[key] = value;
    setEnemy({ ...enemy });
  };
  return (
    <AdminForm enemy={enemy} handleSubmit={handleSubmit} setNew={setNew} />
  );
}