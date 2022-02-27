import { useState } from 'react';
//Custom hook que se encargara de manejar los formularios
export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setvalues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
