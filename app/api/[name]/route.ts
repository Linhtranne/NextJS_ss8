
import { NextRequest, NextResponse } from 'next/server';
const users = [
  { id: 1, user_name: 'David', age: 20 },
  { id: 2, user_name: 'Linda', age: 22 },
];
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name')?.toLowerCase();
  const user = users.find((user) => user.user_name.toLowerCase() === name);

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ message: `Không tìm thấy người dùng có tên = ${name}` }, { status: 404 });
  }
}
