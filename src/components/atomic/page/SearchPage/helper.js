const regions = [
  {
    name: 'Kanto',
    limit: 151,
    offset: 0
  },
  {
    name: 'Johto',
    limit: 100,
    offset: 151
  },
  {
    name: 'Hoenn',
    limit: 135,
    offset: 251
  },
  {
    name: 'Sinnoh',
    limit: 108,
    offset: 386
  },
  {
    name: 'Unova',
    limit: 155,
    offset: 494
  },
  {
    name: 'Kalos',
    limit: 72,
    offset: 649
  },
  {
    name: 'Alola',
    limit: 88,
    offset: 721
  },
  {
    name: 'Galar',
    limit: 89,
    offset: 809
  }
];

const types = [
  'all types',
  'grass',
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water'
];

const sortby = ['ID', 'Name'];

const filterBySearch = (pokemon, filterSearch = '') => {
  const pokemonName = pokemon?.name;
  return pokemonName.toLowerCase().includes(filterSearch);
};

const filterByType = (pokemon = [], filterType = '') => {
  const pokemonTypes = pokemon?.types.map((i) => i?.type?.name || []);

  if (!pokemonTypes || !pokemonTypes.includes(filterType)) return false;

  return true;
};

const sortingBy = (sortBy) => {
  if (sortBy === 'ID') {
    return (a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0);
  }

  if (sortBy === 'Name') {
    return (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
  }
};

export { regions, types, sortby, filterBySearch, filterByType, sortingBy };
