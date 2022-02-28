import React, { useRef } from 'react';
import '../useEffect/effects.css';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // uso basico del foco
    // document.querySelector('input').select();

    inputRef.current.select();
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr></hr>
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      ></input>
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
