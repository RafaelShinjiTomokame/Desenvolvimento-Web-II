import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';
import { City } from '../types/types';

const ListContainer = styled.div<{ darkMode: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${({ darkMode }) => (darkMode ? '#1e1e1e' : '#ffffff')};
  border-right: 1px solid ${({ darkMode }) => (darkMode ? '#333' : '#ddd')};
`;

const CityItem = styled.div<{ selected: boolean; darkMode: boolean }>`
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ selected, darkMode }) =>
    selected 
      ? darkMode ? '#3a3a3a' : '#e0e0e0'
      : darkMode ? '#2a2a2a' : '#f9f9f9'};
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#3a3a3a' : '#e0e0e0')};
  }
`;

const LoadingText = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ErrorText = styled.div`
  padding: 1rem;
  color: #ff4444;
  text-align: center;
`;

const CityList: React.FC = () => {
  const {
    cities,
    selectedCity,
    loading,
    error,
    fetchIrradiationData,
    darkMode,
  } = useAppContext();

  const handleCityClick = (city: City) => {
    fetchIrradiationData(city.id);
  };

  if (loading && cities.length === 0) {
    return <LoadingText>Carregando cidades...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <ListContainer darkMode={darkMode}>
      {cities.map((city) => (
        <CityItem
          key={city.id}
          onClick={() => handleCityClick(city)}
          selected={selectedCity?.id === city.id}
          darkMode={darkMode}
        >
          {city.nome}
        </CityItem>
      ))}
    </ListContainer>
  );
};

export default CityList;