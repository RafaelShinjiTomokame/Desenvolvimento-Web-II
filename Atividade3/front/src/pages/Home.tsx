import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 2rem;
`;

const Title = styled.h1`
  color:rgb(0, 0, 0);
`;

const Button = styled(Link)`
  background-color:rgb(0, 0, 0);
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;

  &:hover {
    background-color:rgb(0, 0, 0);
  }
`;

export const Home = () => {
  return (
    <Container>
      <Title>Gerador de Palpites para Mega-Sena</Title>
      <Button to="/palpite">Clique para começar</Button>
    </Container>
  );
};