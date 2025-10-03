import cities from '@/data/cities.json';

export async function GET() {
  return Response.json(cities);
}