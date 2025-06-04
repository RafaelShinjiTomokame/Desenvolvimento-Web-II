import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContextType, City, IrradiationData } from '../types/types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [irradiationData, setIrradiationData] = useState<IrradiationData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const API_URL = 'http://localhost:3000';

  const fetchCities = async () => {
    setLoading(true);
    try {
      const response = await axios.get<City[]>(`${API_URL}/cidade`);
      setCities(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar lista de cidades');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchIrradiationData = async (cityId: number) => {
    setLoading(true);
    try {
      const response = await axios.get<IrradiationData>(`${API_URL}/cidade/${cityId}`);
      setIrradiationData(response.data);
      setError(null);
      
      // Encontra a cidade selecionada
      const city = cities.find(c => c.id === cityId);
      if (city) setSelectedCity(city);
    } catch (err) {
      setError('Erro ao carregar dados de irradiação');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cities,
        selectedCity,
        irradiationData,
        loading,
        error,
        fetchCities,
        fetchIrradiationData,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};