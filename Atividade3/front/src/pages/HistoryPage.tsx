import { useBet } from '../contexts/BetContext';
import { HistoryTable } from '../components/HistoryTable';

export const HistoryPage = () => {
  const { history } = useBet();

  return (
    <div>
      <h2>Histórico de Palpites</h2>
      {history.length > 0 ? (
        <HistoryTable history={history} />
      ) : (
        <p>Nenhum palpite gerado ainda.</p>
      )}
    </div>
  );
};