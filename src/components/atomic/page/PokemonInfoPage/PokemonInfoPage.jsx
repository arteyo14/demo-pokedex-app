import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Card, PokemonInfo, PokemonData } from '@atomic';
import { pokemonInfo, getCardColorsByPokemonTypes } from '@/utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const PokemonInfoPage = () => {
  let [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const bgColors = getCardColorsByPokemonTypes(pokemonInfo?.types);

  return (
    <Wrapper>
      <Card
        bgColors={bgColors}
        width="80%"
        borderRadius="1rem"
        maxWidth="80rem"
      >
        <Row align="middle">
          <Col xs={24} sm={12} md={8}>
            <PokemonInfo pokemon={pokemonInfo} />
          </Col>
          <Col xs={24} sm={12} md={16}>
            <PokemonData pokemon={pokemonInfo} />
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
};

export default PokemonInfoPage;
