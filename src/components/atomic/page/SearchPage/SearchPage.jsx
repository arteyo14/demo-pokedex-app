import { Logo } from '@atomic';

// import pokemonLogo from '../../../../assets/images/pokedex.png'
import pokemonLogo from '@/assets/images/pokedex.png';

const SearchPage = () => {
  return (
    <div>
      Search Page
      <Logo src={pokemonLogo} />
    </div>
  );
};

export default SearchPage;
