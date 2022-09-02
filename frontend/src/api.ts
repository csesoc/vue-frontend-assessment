import { URL } from './config';

const request = async (path: string, method: string, payload = {}) => {
  return await fetch(path, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

const useEndpoint = (url: string) => {
  const login = (payload: Object) =>
    request(`${url}/auth/login`, 'POST', payload)

  return { login }
}

export default useEndpoint(URL);
