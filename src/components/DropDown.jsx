import { useState } from 'react';

const DropDown = () => {
  const [select, setSelect] = useState('Berlin');

  return (
    <select value={select} onChange={(e) => setSelect(e.target.value)}>
      <option value='Berlin'>Berlin</option>
      <option value='London'>London</option>
      <option value='Madrid'>Madrid</option>
    </select>
  );
};

export default DropDown;
