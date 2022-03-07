import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../components/useContext/LoginScreen';
import { UserContext } from '../../components/useContext/UseContext';

describe('Pruebas en <LoginScreen />', () => {
  //wrapper // mount

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de ejecutar el setUser con el argumento esperando', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Rabi',
    });
  });
});
