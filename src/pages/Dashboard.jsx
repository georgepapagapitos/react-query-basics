import React, { useState } from 'react'
import { useIsFetching } from 'react-query';
import CreateUser from '../components/CreateUser';
import User from '../components/User'
import Users from '../components/Users'

export default function Dashboard() {

  const [selectedUser, setSelectedUser] = useState(null);
  const isFetching = useIsFetching();

  return (
    <>
      <Users setSelectedUser={setSelectedUser} />

      <hr />

      <User selectedUser={selectedUser} />

      <hr />

      <CreateUser />

      {isFetching ? <p style={{ padding: '1rem', position: 'fixed', top: '2%', right: '0%' }}>Loading...</p> : null}
    </>
  );
}