import { redirect } from 'next/navigation'

// param = request: Request
export async function GET() {
  redirect('/list')
}
