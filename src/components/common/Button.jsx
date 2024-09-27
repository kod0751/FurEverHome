import styled from 'styled-components';

const StyledButton = styled.button``;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
