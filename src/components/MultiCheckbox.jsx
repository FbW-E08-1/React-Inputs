import { useState } from 'react';

const MultiCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState({
    chk1: false,
    chk2: false,
    chk3: false,
  });

  const handleChange = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <input
        type='checkbox'
        name='chk1'
        checked={checkboxes.chk1}
        onChange={handleChange}
      />
      <input
        type='checkbox'
        name='chk2'
        checked={checkboxes.chk2}
        onChange={handleChange}
      />
      <input
        type='checkbox'
        name='chk3'
        checked={checkboxes.chk3}
        onChange={handleChange}
      />
    </div>
  );
};

export default MultiCheckbox;
