import { useEffect, useState } from 'react';
import EnemyDetail from '../components/Enemy/Enemy';
import { deleteEnemy, fetchEnemyId } from '../services/Enemies';

export default function Enemy(props) {
  const [enemy, setEnemy] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEnemyId(props.match.params.id);
      setEnemy(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try { await deleteEnemy(enemy.id) ;
      alert('deleted');
      history.push(`/`);
    } catch {
      alert('try again');
    }
  };

  return (
    <div>
      <EnemyDetail key={enemy.id} {...enemy} handleDelete={handleDelete} />
    </div>
  );
}