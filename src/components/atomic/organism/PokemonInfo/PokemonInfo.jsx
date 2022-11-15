import styled from 'styled-components';

import { Text } from '@atomic';
import { getHeight, getWeight } from '@/utils';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  border-radius: 1.2rem;
`;

const StyledImage = styled.div`
  padding: 2rem;
  max-width: 20rem;
`;

const PokemonInfo = ({ pokemon }) => {
  return (
    <InfoWrapper>
      <Text>#{pokemon?.id}</Text>
      <Text>Name: {pokemon?.name}</Text>
      <StyledImage>
        <img src={pokemon?.image} width="100%" />
      </StyledImage>
      <Text fontSize="0.8rem">Height: {getHeight(pokemon?.height)}</Text>
      <Text fontSize="0.8rem">Weight: {getWeight(pokemon?.weight)}</Text>
    </InfoWrapper>
  );
};

export default PokemonInfo;
