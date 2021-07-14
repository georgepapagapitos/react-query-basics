import React, { useState } from 'react'
import { useIsFetching } from 'react-query';
import CreateUser from '../components/CreateUser';
import User from '../components/User';
import Users from '../components/Users';
import styles from '../App.module.scss';
import Header from '../components/Header';

export default function Dashboard() {

  const [selectedUser, setSelectedUser] = useState(null);
  const isFetching = useIsFetching();

  const headerText = "This is a header";

  return (
    <>
      <Header />
      <h1 className={headerText.length > 5 ? styles.header : null}>{headerText}</h1>

      <Users setSelectedUser={setSelectedUser} />
      <hr />
      <User selectedUser={selectedUser} />
      <hr />
      <CreateUser />
      {isFetching ? <p style={{ padding: '1rem', position: 'fixed', top: '2%', right: '0%' }}>Loading...</p> : null}
    </>
  );
}