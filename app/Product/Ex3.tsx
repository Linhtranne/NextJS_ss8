// D:\Next.Js\ss8\app\page.tsx
"use client"
import { useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  user_name: string;
  age: number;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isIdSearch, setIsIdSearch] = useState<boolean>(true);

  const searchUser = () => {
    const queryParam = isIdSearch ? `id=${searchTerm}` : `name=${searchTerm}`;
    axios.get(`/api/users?${queryParam}`)
      .then(response => {
        setUser(response.data);
        setError(null);
      })
      .catch(error => {
        setUser(null);
        setError(error.response?.data.message || 'Có lỗi xảy ra');
      });
  };

  return (
    <div>
      <h1>Tìm kiếm người dùng</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={isIdSearch ? "Nhập ID" : "Nhập tên"}
      />
      <button onClick={searchUser}>Tìm kiếm</button>
      <button onClick={() => setIsIdSearch(!isIdSearch)}>
        {isIdSearch ? "Chuyển sang tìm theo tên" : "Chuyển sang tìm theo ID"}
      </button>

      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Tên: {user.user_name}</p>
          <p>Tuổi: {user.age}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
