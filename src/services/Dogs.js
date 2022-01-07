import { client, checkError } from './client';

export async function fetchDogs() {
  const resp = await client.from('enemies').select().order('name');
  return checkError(resp);
}

export async function fetchDogId(id) {
  const resp = await client.from('enemies').select('*').match({ id });
  return checkError(resp);
}

export async function updateEnemy(id, name, level, type, image, element) {
  const resp = await client.from('enemies').update({ name, level, type, image, element }).eq('id', id);
  return checkError(resp);
}