import { useState } from 'react';
import styled from 'styled-components';

import { Icon } from '@atomic';

const StyledIcon = styled(Icon)`
  margin: ${({ margin }) => margin};

  svg {
    fill: ${({ active }) => (active ? '#da7589' : 'currentColor')};
  }
`;

const IconToggle = ({
  name,
  margin,
  isColorChange = true,
  onClick,
  ...props
}) => {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    isColorChange && setActive(!active);
    onClick?.();
  };

  return (
    <StyledIcon
      name={name}
      margin={margin}
      active={active}
      onClick={handleOnClick}
      {...props}
    />
  );
};

export default IconToggle;
