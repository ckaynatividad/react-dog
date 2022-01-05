import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../components/Dogs/Dogs';
import { fetchDogs } from '../services/Dogs';

export default function DogsView() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="dogList">
      <p>dogs</p>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/${dog.id}`}><Dogs key={dog.id} {...dog}/></Link>
      ))}
    </div>
  );

}