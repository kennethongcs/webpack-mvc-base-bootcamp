import React from 'react';
import './styles.scss';
import { createRoot } from 'react-dom/client';

console.log('hello');

// create jsx element
const myEl = (
  <div>
    <h1>Hey you!</h1>
    <p>
      Exercitation velit aliquip duis consequat duis qui commodo incididunt
      magna in.
    </p>
  </div>
);

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const reactComponent = createRoot(rootElement);

reactComponent.render(myEl);
