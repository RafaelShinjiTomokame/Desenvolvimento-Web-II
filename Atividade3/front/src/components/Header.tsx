import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color:rgb(0, 0, 0);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Mega-Sena Generator</h1>
      <Nav>
        <StyledLink to="/palpite">Palpite</StyledLink>
        <StyledLink to="/historico">Histórico</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};