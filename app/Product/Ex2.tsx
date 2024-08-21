"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  user_name: string;
  age: number;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/[id]')
      .then(response => {
        setUser(response.data);
        setError(null);
      })
      .catch(error => {
        setUser(null);
        setError(error.response?.data.message || 'Có lỗi xảy ra');
      });
  }, []);

  return (
    <div>
      <h1>Thông tin người dùng</h1>
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
