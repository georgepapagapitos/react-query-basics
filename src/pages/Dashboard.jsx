import React, { useState } from 'react'
import { useIsFetching } from 'react-query';
import User from '../components/User'
import Users from '../components/Users'

export default function Dashboard() {

  const [selectedUser, setSelectedUser] = useState(null);
  const isFetching = useIsFetching();

  return (
    <div>
      <Users setSelectedUser={setSelectedUser} />

      <hr />

      <User selectedUser={selectedUser} />

      {isFetching ? <p style={{ position: 'fixed', top: '2%', right: '0%' }}>Loading...</p> : null}
    </div>
  );
}