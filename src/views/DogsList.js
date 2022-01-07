import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../components/Dogs/Dogs';
import { fetchDogs } from '../services/Dogs';
import './DogsList.css';

export default function DogsView() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="dogList">
      {loading && <h3>Loading doggies...</h3>}
      {!loading && (
        <div className="doggies">
          {dogs.map((dog) => (
            <Link key={dog.id} to={`/${dog.id}`}><Dogs key={dog.id} {...dog}/></Link>
          ))}
        </div>
      )}
    </div>
  );

}