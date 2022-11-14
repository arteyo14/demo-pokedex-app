import data from './data.json';

const pokemonInfo = {
  id: data.id,
  name: data.name,
  types: data.types,
  images: data.sprites.other.dream_world.front_default,
  flavor_text_entries: [
    {
      flavor_text_entries:
        'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'
    }
  ],
  abilities: data.abilities,
  stats: data.stats,
  height: data.height,
  weight: data.weight
};

export { pokemonInfo };
