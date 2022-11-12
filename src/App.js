import { Image } from 'antd';

import pokemonLogoSrc from './assets/images/pokedex.png';

import { Button } from '@atomic';
import { log } from '@utils';

function App() {
  log('hello');
  return (
    <div>
      <div>React App</div>
      <Image width={200} src={pokemonLogoSrc} />
      <Button type="primary">Click me</Button>
    </div>
  );
}

export default App;
