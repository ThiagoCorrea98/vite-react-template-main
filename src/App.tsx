import React, { useEffect, useState } from 'react';
import './App.css';

export interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function getUser(id: number) {
  const request = await fetch(`https://reqres.in/api/users/${id}?delay=1`);

  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.error);
  }

  return response.data as IData;
}

function App() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [user, setUser] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser(currentUserId)
      .then((response) => {
        setUser(response);
        setLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setLoading(false);
      });
  }, [currentUserId]);

  if (isError) {
    return (
      <section>
        <p>Algo deu errado!</p>
      </section>
    );
  }

  if (!user || loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <img src={user.avatar} />
      <p>
        {user.first_name} {user.last_name} ({user.id})
      </p>

      <p>Email: {user.email}</p>

      <div>
        <button onClick={() => setCurrentUserId((prev) => prev - 1)}>
          Prev
        </button>
        <button onClick={() => setCurrentUserId((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </section>
  );
}

export default App;
