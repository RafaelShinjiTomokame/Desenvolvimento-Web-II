import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';

const DataContainer = styled.div<{ darkMode: boolean }>`
  padding: 1rem;
  background-color: ${({ darkMode }) => (darkMode ? '#1e1e1e' : '#ffffff')};
  border-top: 1px solid ${({ darkMode }) => (darkMode ? '#333' : '#ddd')};
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

const DataItem = styled.div<{ darkMode: boolean }>`
  padding: 0.5rem;
  background-color: ${({ darkMode }) => (darkMode ? '#2a2a2a' : '#f0f0f0')};
  border-radius: 4px;
`;

const DataLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 0.25rem;
`;

const DataValue = styled.span`
  display: block;
`;

const IrradiationData: React.FC = () => {
  const { selectedCity, irradiationData, darkMode } = useAppContext();

  if (!selectedCity || !irradiationData) {
    return null;
  }

  const months = [
    { label: 'Janeiro', key: 'jan' },
    { label: 'Fevereiro', key: 'fev' },
    { label: 'Março', key: 'mar' },
    { label: 'Abril', key: 'abr' },
    { label: 'Maio', key: 'mai' },
    { label: 'Junho', key: 'jun' },
    { label: 'Julho', key: 'jul' },
    { label: 'Agosto', key: 'ago' },
    { label: 'Setembro', key: 'set' },
    { label: 'Outubro', key: 'out' },
    { label: 'Novembro', key: 'nov' },
    { label: 'Dezembro', key: 'dez' },
  ];

  return (
    <DataContainer darkMode={darkMode}>
      <Title>Dados de Irradiação Solar - {selectedCity.nome}</Title>
      <DataGrid>
        <DataItem darkMode={darkMode}>
          <DataLabel>Anual</DataLabel>
          <DataValue>{irradiationData.anual} Wh/m².dia</DataValue>
        </DataItem>
        {months.map((month) => (
          <DataItem key={month.key} darkMode={darkMode}>
            <DataLabel>{month.label}</DataLabel>
            <DataValue>{irradiationData[month.key as keyof typeof irradiationData]} Wh/m².dia</DataValue>
          </DataItem>
        ))}
      </DataGrid>
    </DataContainer>
  );
};

export default IrradiationData;