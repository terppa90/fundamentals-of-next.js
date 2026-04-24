/**
 * @jest-environment node
 */
import { GET } from '@/app/api/hello/route';
 
test('returns hello message and 200 status code', async () => {
  const response = await GET();
  const data = await response.json();
 
  expect(response.status).toBe(200);
  expect(data).toEqual({ message: 'Hello API' });

  // Kokeilin myös headerin tarkistusta
  expect(response.headers.get('content-type')).toBe('application/json');
});