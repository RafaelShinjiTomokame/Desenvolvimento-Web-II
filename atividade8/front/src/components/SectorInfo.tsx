// src/components/SectorInfo.tsx
import React from 'react';
import styled from 'styled-components';
import { useCenso } from '../context/CensoContext';

// Estilização do container de informações do setor
const SectorInfoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(180, 180, 180, 0.6);
  border-radius: 10px;
  padding: 15px;
  z-index: 1;
  min-width: 250px;
  max-width: 350px;
  pointer-events: auto;
`;

const Title = styled.h4`
  margin-bottom: 10px;
  color: #000000;
  font-size: 1.1em;
`;

const InfoItem = styled.p`
  margin-bottom: 5px;
  color: #000000;
  font-size: 0.95em;

  strong {
    color: #000000;
  }
`;

const SectorInfo: React.FC = () => {
  const { selectedSector, loading, error, setSelectedSector } = useCenso();

  if (!selectedSector) {
    return null;
  }

  if (loading) {
    return (
      <SectorInfoContainer>
        <p>Carregando informações do setor...</p>
      </SectorInfoContainer>
    );
  }

  if (error) {
    return (
      <SectorInfoContainer>
        <p>Erro ao carregar informações do setor: {error}</p>
        <button onClick={() => setSelectedSector(null)}>Fechar</button>
      </SectorInfoContainer>
    );
  }

  return (
    <SectorInfoContainer>
      <Title>Informações do Setor:</Title>
      <InfoItem>
        <strong>Cód. Setor:</strong> {selectedSector.cd_setor}
      </InfoItem>
      <InfoItem>
        <strong>Município:</strong> {selectedSector.nm_mun}
      </InfoItem>
      <InfoItem>
        <strong>Situação:</strong> {selectedSector.situacao}
      </InfoItem>
      <InfoItem>
        <strong>Área:</strong> {selectedSector.area_km2.toFixed(3)} km²
      </InfoItem>
      {/* Você pode adicionar um botão para fechar as informações, se desejar */}
      {/* <button onClick={() => setSelectedSector(null)}>Fechar</button> */}
    </SectorInfoContainer>
  );
};

export default SectorInfo;