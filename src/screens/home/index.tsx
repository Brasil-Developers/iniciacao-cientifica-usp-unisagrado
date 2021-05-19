import React, { useState } from 'react';

import FilhoHome from './childen';
const Home = () => {

  const [ value_, setValue_] = useState( 1 );

  const teste = ( vlr:number ) => {
    setValue_(vlr);
  }

  return (
    <>
      <FilhoHome valor={value_} testeFunc={teste}/>
      pai : { value_ }
    </>
  );
}

export default Home;