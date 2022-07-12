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
