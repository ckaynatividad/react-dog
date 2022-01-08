import { client, checkError } from './client';

export async function fetchEnemies() {
  const resp = await client.from('enemies').select().order('name');
  return checkError(resp);
}

export async function fetchEnemyId(id) {
  const resp = await client.from('enemies').select('*').match({ id });
  return checkError(resp);
}

export async function updateEnemy({ id, name, level, type, image, element }) {
  const resp = await client.from('enemies').update({ name, level, type, image, element }).eq('id', id);
  return checkError(resp);
}

export async function createEnemy(enemy) {
  const resp = await client.from('enemies').insert(enemy);
  return checkError(resp);
}

export async function deleteEnemy(id) {
  const resp = await client.from('enemies').delete().match({ id });
  return checkError(resp);
}