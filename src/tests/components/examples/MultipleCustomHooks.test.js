import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch.js');
jest.mock('../../../hooks/useCounter.js');

describe('Pruebas en MultipleCustomHoks', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test('debe de mostrar correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should debe de mostrar la información', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Rabi',
          quote: 'Hola Mundo',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
    expect(wrapper.find('footer').text().trim()).toBe('Rabi');
  });
});
