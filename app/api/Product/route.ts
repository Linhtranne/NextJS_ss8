import { NextResponse } from 'next/server';

let appConfig = {
  username: 'binh',
  theme: 'light',   
  timezone: 'UTC'   
};

export async function POST(request: Request) {
  try {
    const configData = await request.json();
    appConfig = { ...appConfig, ...configData };
    return NextResponse.json({
      message: "Cấu hình đã được cập nhật thành công",
      config: appConfig,
    });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi khi cập nhật cấu hình" }, { status: 500 });
  }
}
export async function GET(){
    return NextResponse.json(appConfig);
}