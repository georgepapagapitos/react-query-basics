import React from 'react';
import useUsers from '../query-hooks/useUsers';

export default function Users({ setSelectedUser }) {

  const users = useUsers();

  return (
    <>
      {users.isLoading && <p>Loading users...</p>}
      {users.isError && <p>Could not fetch users...</p>}
      {
        users.isSuccess &&
        <ul>
          {
            users.data.map(user => (
              <li onClick={() => setSelectedUser(user.id)} key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      }
    </>
  );
}

