import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../components/useContext/HomeScreen';
import { UserContext } from '../../components/useContext/UseContext';

describe('Pruebas en <HomeScreen/>', () => {
  const user = {
    name: 'Leonel',
    email: 'leonel@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
