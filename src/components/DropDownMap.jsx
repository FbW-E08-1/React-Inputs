import { useState } from 'react';

const DropDownMap = () => {
  const [select, setSelect] = useState('Berlin');

  const options = ['Berlin', 'London', 'Madrid'];

  const optionsList = options.map((opt, i) => (
    <option key={i} value={opt}>
      {opt}
    </option>
  ));

  return (
    <div>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        {optionsList}
      </select>
      <br />
      {select}
    </div>
  );
};

export default DropDownMap;
