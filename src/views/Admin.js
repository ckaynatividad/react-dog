import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AdminForm from '../components/Admin/Admin';
import { fetchDogId, updateEnemy } from '../services/Dogs';

export default function AdminEdit() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [element, setElement] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogId(params.id);

      setName(resp.name);
      setLevel(resp.level);
      setType(resp.type);
      setImage(resp.image);
      setElement(resp.element);
    };
    fetchData();
  }, [params.id]);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEnemy(params.id, name, level, type, image, element);
  };
  return (
    <div>
      <h2>Edit Cute Enemy</h2>
      <AdminForm name={name} setName={setName} level={level} setLevel={setLevel} type={type} setType={setType} image={image} setImage={setImage} element={element} setElement={setElement} />

    </div>
  );
}
