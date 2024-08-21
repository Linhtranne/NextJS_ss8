import { NextRequest, NextResponse } from 'next/server';

const users = [
  { id: 1, user_name: 'David', age: 20 },
  { id: 2, user_name: 'Linda', age: 22 },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(users);
}