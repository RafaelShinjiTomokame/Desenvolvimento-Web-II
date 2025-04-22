import { useBet } from '../contexts/BetContext';
import { BetDisplay } from '../components/BetDisplay';

export const BetPage = () => {
  const { currentBet, generateNewBet } = useBet();

  return <BetDisplay bet={currentBet} onNewBet={generateNewBet} />;
};