import styled from 'styled-components';

const BetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const Numbers = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Number = styled.span`
  background-color:rgb(0, 0, 0);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  background-color:rgb(0, 0, 0);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color:rgb(0, 0, 0);
  }
`;

interface BetDisplayProps {
  bet: number[];
  onNewBet: () => void;
}

export const BetDisplay = ({ bet, onNewBet }: BetDisplayProps) => {
  return (
    <BetContainer>
      <h2>Seu palpite:</h2>
      <Numbers>
        {bet.map((num, index) => (
          <Number key={index}>{num}</Number>
        ))}
      </Numbers>
      <Button onClick={onNewBet}>Nova sugestão</Button>
    </BetContainer>
  );
};