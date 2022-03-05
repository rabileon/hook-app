import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UseContext';
export const MainApp = () => {
  const user = {
    id: 1234,
    name: 'Ferando',
    email: 'rleon@hotmail.com',
  };
  return (
    <UserContext.Provider value={user}>
      <AppRouter></AppRouter>
    </UserContext.Provider>
  );
};
