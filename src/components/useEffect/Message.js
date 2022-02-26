import React, { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('Compónente montado');

    return () => {
      ('Componente desmontado');
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
    </div>
  );
};
