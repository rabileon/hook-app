import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('Me Volví a lllamar :(');
  return (
    <>
      <small> {value}</small>
    </>
  );
});
