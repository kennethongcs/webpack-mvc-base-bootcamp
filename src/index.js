import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const rootComponent = createRoot(rootElement);
rootComponent.render();
