import { useState } from 'react';
import Ball from '../ball';

function Exercise2() {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
 
  const addNumber = () => {
    const num = Number(number);
    if (Number.isFinite(num)) {
      const newNumbers = numbers.length >= 12 ? numbers.slice(1) : numbers;
      setNumbers([...newNumbers, num]);
      setNumber('');
    }
  };
 
  const removeNumber = (num: number) => {
    setNumbers(numbers.filter((n) => n !== num));
  };
 
  return (
    <div>
      <h2>Exercício 2</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={addNumber}>Adicionar Número</button>
      <div>{numbers.map((num, index) => <Ball key={index} number={num} onRightClick={removeNumber} />)}</div>
    </div>
  );
}
 
export default Exercise2;