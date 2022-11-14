import { Card as CardAntd } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(CardAntd)`
  width: ${({ width }) => width || '20rem'};
  padding: ${({ padding }) => padding || '1rem'};
  background: ${({ bgColors }) =>
    `linear-gradient(${bgColors[0]},${bgColors[1]})`};

  .ant-card-body {
    padding: 0;
  }

  border-radius: ${({ borderRadius }) => borderRadius || '0.1rem'};
  max-width: ${({ width }) => width || '60rem'};
`;

const Card = ({ children, left, right, bgColors = [], maxWidth, ...props }) => {
  const header = <Header left={left} right={right} />;
  return (
    <StyledCard bgColors={bgColors} maxWidth={maxWidth} {...props}>
      {header && header}
      {children}
    </StyledCard>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ left, right, children }) => {
  return (
    <>
      <StyledHeaderContainer>
        {left && <div>{left}</div>}
        {right && <div>{right}</div>}
      </StyledHeaderContainer>
      {children}
    </>
  );
};

Card.Header = Header;

export default Card;
