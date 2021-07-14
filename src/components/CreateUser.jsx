import React from 'react'
import useCreateUser from '../query-hooks/useCreateUser';

export default function CreateUser() {

  const mutation = useCreateUser();

  return (
    <div>
      <button type="button" onClick={() => mutation.mutate({name: 'Jimmy John', age: 13})}>Create User</button>
    </div>
  );
}