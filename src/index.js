import React, { useState } from 'react';
import './styles.scss';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

console.log('hello');

const arr = ['house', 'plane', 'items'];

// creating jsx elements
const loopOfItems = arr.map((items) => <li>{items}</li>);

const Form = () => {
  const [name, setName] = useState('');

  const handleChange = (evt) => {
    // Retrieve input field value from JS event object.
    const inputName = evt.target.value;
    // Log input field value to verify what we typed.
    console.log('inputName:', inputName);
    // Set the value stored in component state to be the new value.
    setName(inputName);
  };

  // The value of the input field always matches the value in the state
  // variable name. When the input value changes, handleChange updates
  // the value in the state.
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <div>Name: {name}</div>
      {/* <div>Name: hi</div> */}
    </div>
  );
};

// create jsx element
const myEl = (
  <div>
    <h1>Hey you!</h1>
    <p>
      Exercitation velit aliquip duis consequat duis qui commodo incididunt
      magna in.
    </p>
    {/* <ul>{loopOfItems}</ul> */}
    <Form />
  </div>
);

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const reactComponent = createRoot(rootElement);

reactComponent.render(myEl);
// render(myEl, rootElement);
