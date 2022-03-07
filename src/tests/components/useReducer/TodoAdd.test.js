import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>);

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe de llamar handleAddTodo', () => {
    wrapper.find('form').simulate('change', { preventDefault() {} });
    // const formSubmit = wrapper.find('form').prop('onSubmit');

    // formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe de llamar la funcion handleAddTodo', () => {
    const value = 'Aprender React';

    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    const formatSubmit = wrapper.find('form').prop('onSubmit');

    formatSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
