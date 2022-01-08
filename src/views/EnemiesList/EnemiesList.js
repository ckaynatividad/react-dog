import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Enemies from '../../components/Enemies/Enemies';
import { fetchEnemies } from '../../services/Enemies';
import './EnemiesList.css';

export default function EnemiesView() {
  const [enemies, setEnemies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEnemies();
      setEnemies(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="enemyList">
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div className="enemiez">
          {enemies.map((enemy) => (
            <Link key={enemy.id} to={`/${enemy.id}`}><Enemies key={enemy.id} {...enemy}/></Link>
          ))}
        </div>
      )}
    </div>
  );

}