import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

function BigNumber({ number }) {
  return <h1>number: {number}</h1>;
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <BigNumber key={number.toString()} number={number} />
  // <h1 key={number.toString()}>{number}</h1>
));

const myEl = (
  <div>
    <ul>{listItems}</ul>
  </div>
);

// Create root element to render React elements into
const rootElement = document.createElement('div');
// Append root element to document
document.body.appendChild(rootElement);
// Have React render the JSX element into the root element
const rootComponent = createRoot(rootElement);
rootComponent.render(myEl);
