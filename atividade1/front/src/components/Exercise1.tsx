import React, { useState } from 'react';
import Ball from '../ball';

const Exercise1: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleGenerateNumbers = () => {
    const numCount = Math.min(quantity, 12);
    const generatedNumbers = Array.from({ length: numCount }, () => Math.floor(Math.random() * 100));
    setNumbers(generatedNumbers.sort((a, b) => a - b));
  };

  return (
    <div>
      <h2>Exercise 1: Gerar Números Aleatórios</h2>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        max={12}
        min={1}
        placeholder="Quantos números gerar?"
      />
      <button onClick={handleGenerateNumbers}>Gerar</button>

      <div>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} onRightClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;
