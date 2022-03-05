import { shallow } from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Prueba en <HookApp />', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
