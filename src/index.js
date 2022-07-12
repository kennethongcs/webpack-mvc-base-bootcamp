import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import pokemon from './react-pokedex.json';

const PokemonLoop = (pokemonData) => {
  const name = pokemonData.pokemon.names.en;
  const type = pokemonData.pokemon.types;
  const element = (
    <div>
      <h1>Pokemon: {name}</h1>
      <p>Type: {type}</p>
    </div>
  );
  return element;
};

const loop = pokemon.pokedex.map(
  (pokemonData, index) =>
    index < 20 && (
      <PokemonLoop
        key={pokemonData.national_id.toString()}
        pokemon={pokemonData}
      />
    )
);

const myEl = (
  <div>
    <ul>{loop}</ul>
  </div>
);

// Create root element to render React elements into
const rootElement = document.createElement('div');
// Append root element to document
document.body.appendChild(rootElement);
// Have React render the JSX element into the root element
const rootComponent = createRoot(rootElement);
rootComponent.render(myEl);
