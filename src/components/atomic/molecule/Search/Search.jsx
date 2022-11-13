import { useState } from 'react';
import styled from 'styled-components';

import { Text, Input } from '@atomic';

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .search-input-wrapper {
    margin-top: 1rem;

    .ant-input {
      font-size: 1rem;
      height: 3rem;
      min-width: 20rem;
    }
  }
`;

const Search = ({ label, placeholder, ...props }) => {
  const [value, setValue] = useState('');

  const onSearchChange = (value) => {
    setValue(value);
  };

  return (
    <StyledDiv>
      <Text>{label}</Text>
      <div className="search-input-wrapper">
        <Input
          placeholder={placeholder}
          value={value}
          onSearchChange={onSearchChange}
          {...props}
        />
      </div>
    </StyledDiv>
  );
};

export default Search;
