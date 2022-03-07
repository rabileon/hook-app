import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../components/useContext/AppRouter';
import { UserContext } from '../../components/useContext/UseContext';

describe('Pruebas en <AppRouter />', () => {
  const user = {
    id: 123,
    name: 'Rabi',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
