
import { NextRequest, NextResponse } from 'next/server';

const users = [
  { id: 1, user_name: 'David', age: 20 },
  { id: 2, user_name: 'Linda', age: 22 },
];

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
  }
}

