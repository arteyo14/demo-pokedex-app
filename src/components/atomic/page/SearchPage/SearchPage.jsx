import styled from 'styled-components';
import { Row, Col } from 'antd';

import { Logo, FilterDropdown, Search } from '@atomic';

import { regions, types, sortby } from './helper';

import pokemonLogo from '@/assets/images/pokedex.png';

const Container = styled.div`
  text-align: center;
`;

const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem;
`;

const SearchPage = () => {
  const regionDropdownItems = regions.map((r) => {
    return {
      ...r,
      key: r?.name,
      value: r?.name,
      label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`
    };
  });

  const typeDropdownItems = types.map((t) => ({
    key: t,
    value: t,
    label: t
  }));

  const sortbyDropdownItems = sortby.map((s) => ({
    key: s,
    value: s,
    label: s
  }));

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label="REGION" items={regionDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label="TYPE" items={typeDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label="SORT BY" items={sortbyDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Search label={'SEARCH'} />
        </Col>
      </StyledRow>
    </Container>
  );
};

export default SearchPage;
