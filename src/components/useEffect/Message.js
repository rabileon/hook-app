import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    console.log('Compónente montado');

    const mouseMove = (e) => {
      console.log(e);
      const coors = { x: e.x, y: e.y };
      setCoords(coors);
      // console.log(' :D');
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      ('Componente desmontado');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};
