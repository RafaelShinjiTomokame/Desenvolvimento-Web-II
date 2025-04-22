import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BetProvider } from './contexts/BetContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { BetPage } from './pages/BetPage';
import { HistoryPage } from './pages/HistoryPage';
import styled from 'styled-components';

const Main = styled.main`
  padding: 1rem;
`;

export const App = () => {
  return (
    <Router>
      <BetProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palpite" element={<BetPage />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>
        </Main>
      </BetProvider>
    </Router>
  );
};