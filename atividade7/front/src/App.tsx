import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppProvider } from './contexts/AppContext';
import CityList from './components/CityList';
import MapView from './components/MapView';
import IrradiationData from './components/IrradiationData';
import ThemeToggle from './components/ThemeToggle';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MapArea = styled.div`
  flex: 1;
  position: relative;
`;

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles darkMode={false} />
      <AppContainer>
        <ThemeToggle />
        <MainContent>
          <Sidebar>
            <CityList />
            <IrradiationData />
          </Sidebar>
          <MapArea>
            <MapView />
          </MapArea>
        </MainContent>
      </AppContainer>
    </AppProvider>
  );
};

export default App;