import { useEffect, useState } from 'react';
import DogDetail from '../components/Dog/Dog';
import { fetchDogId } from '../services/Dogs';

export default function Dog(props) {
  const [dog, setDog] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogId(props.match.params.id);
      setDog(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);


  return (
    <div>
      <DogDetail key={dog.id} {...dog} />
    </div>
  );
}