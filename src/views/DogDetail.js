import { useEffect, useState } from 'react';
import DogDetail from '../components/Dog/Dog';
import { deleteEnemy, fetchDogId } from '../services/Dogs';

export default function Dog(props) {
  const [dog, setDog] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogId(props.match.params.id);
      setDog(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try { await deleteEnemy(dog) ;
      alert('deleted');
      history.push(`/`);
    } catch {
      alert('try again');
    }
  };

  return (
    <div>
      <DogDetail key={dog.id} {...dog} handleDelete={handleDelete} />
    </div>
  );
}