import React, { useContext } from 'react';
import { UserContext } from './UseContext';

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
    </div>
  );
};