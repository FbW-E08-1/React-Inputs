import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(formData.name);
    setFormData({ name: '', age: '', email: '' });
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleChange}
        name='name'
      />
      <input
        type='text'
        placeholder='Enter your age'
        value={formData.age}
        onChange={handleChange}
        name='age'
      />
      <input
        type='text'
        placeholder='Enter your email'
        value={formData.email}
        onChange={handleChange}
        name='email'
      />
      <button onClick={handleSubmit}>Submit</button>
      {name}
    </form>
  );
};

export default Form;
