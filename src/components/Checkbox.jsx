import { useState } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

export default Checkbox;
