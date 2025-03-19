import React from 'react';
import styled from 'styled-components';

interface BallProps {
  number: number;
  onRightClick: (index: number) => void
}

const BallContainer = styled.div`
  display: inline-block;
  background-color: #6c5ce7;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a29bfe;
  }
`;

const Ball: React.FC<BallProps> = ({ number, onRightClick }) => {
    return (
      <BallContainer onContextMenu={(e) => { e.preventDefault(); onRightClick(number); }}>
        {number}
      </BallContainer>
    );
};

export default Ball;
