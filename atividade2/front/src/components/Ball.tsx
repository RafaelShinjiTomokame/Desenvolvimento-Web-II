import styled from 'styled-components';

interface BallProps {
  letter: string;
}

const BallContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  margin: 0 5px;
  font-size: 24px;
`;

export default function Ball({ letter }: BallProps) {
  return <BallContainer>{letter}</BallContainer>;
}