import React from 'react';
import './styles.scss';
import { render } from 'react-dom';

console.log('hello');

const arr = ['house', 'plane', 'items'];

// creating jsx elements
const loopOfItems = arr.map((items) => <li>{items}</li>);

// create jsx element
const myEl = (
  <div>
    <h1>Hey you!</h1>
    <p>
      Exercitation velit aliquip duis consequat duis qui commodo incididunt
      magna in.
    </p>
    <ul>{loopOfItems}</ul>
  </div>
);

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// const reactComponent = createRoot(rootElement);

// reactComponent.render(myEl);
render(myEl, rootElement);
