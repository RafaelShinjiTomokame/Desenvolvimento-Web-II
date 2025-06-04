import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../contexts/AppContext';

const ToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

const ToggleButton = styled.button<{ darkMode: boolean }>`
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#ddd')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#444' : '#ccc')};
  }
`;

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleDarkMode} darkMode={darkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;