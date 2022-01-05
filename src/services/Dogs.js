import { client, checkError } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select().order('name');
  return checkError(resp);
}

export async function fetchDogId(id) {
  const resp = await client.from('dogs').select('*').match({ id });
  return checkError(resp);
}