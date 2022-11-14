import styled from 'styled-components';
import { Typography } from 'antd';

const { Text: TextAntd } = Typography;

const StyledText = styled(TextAntd)`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
`;

const Text = ({ children, style, ...props }) => {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
