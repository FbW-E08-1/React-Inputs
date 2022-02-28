import { useState } from 'react';

const Radio = () => {
  const [radio, setRadio] = useState({ city: '' });

  const handleChange = (e) => {
    setRadio({ ...radio, city: e.target.value });
  };

  return (
    <div onChange={handleChange}>
      <input type='radio' name='city' value='Berlin' />
      Berlin
      <input type='radio' name='city' value='London' />
      London
      <input type='radio' name='city' value='Madrid' />
      Madrid
      <br />
      {radio.city}
    </div>
  );
};

export default Radio;
