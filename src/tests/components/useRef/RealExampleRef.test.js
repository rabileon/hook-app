import { RealExampleRef } from '../../../components/useRef/RealExampleRef';
import { shallow } from 'enzyme';
import React from 'react';

describe('Pruebas en <RealExampleRef />', () => {
  const wrapper = shallow(<RealExampleRef />);
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe de mostrar el componente <MultipleCustomHooks></MultipleCustomHooks>', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
