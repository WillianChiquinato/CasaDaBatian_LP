import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 12000,
});

export async function fetchInstaPosts() {
  const resp = await api.get('/instagram/posts');
  return resp.data ?? [];
}