"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  user_name: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    axios.get('http://localhost:3000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('error', error);
      });
  }, []);

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.user_name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
