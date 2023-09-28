import { useState } from 'react';
import './form.css'
import React from 'react';

const Form = (props) => {
  const [value, setValue] = React.useState("");
  
  return (
    <form className='form' onSubmit={e => {
      e.preventDefault();
      props.putTodo(value);
      setValue("");
    }}>
      <input type='text' placeholder='Введіть текст' className='input'  value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  );
};

export default Form;
