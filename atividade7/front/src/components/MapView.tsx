import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppContext } from '../contexts/AppContext';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MapView: React.FC = () => {
  const { selectedCity, irradiationData, darkMode } = useAppContext();
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const polygonRef = useRef<L.Polygon | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Inicializa o mapa
      mapRef.current = L.map(mapContainerRef.current).setView([-14.235, -51.925], 4);

      // Adiciona o tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Aplica tema escuro se necessário
      if (darkMode) {
        mapRef.current.getContainer().classList.add('dark-mode');
      } else {
        mapRef.current.getContainer().classList.remove('dark-mode');
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Aplica tema escuro ao mapa
    if (darkMode) {
      mapRef.current.getContainer().classList.add('dark-mode');
    } else {
      mapRef.current.getContainer().classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    if (!mapRef.current || !selectedCity) return;

    // Centraliza o mapa na cidade selecionada
    mapRef.current.setView([selectedCity.lat, selectedCity.lon], 12);

    // Remove marcador anterior
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    // Adiciona novo marcador
    markerRef.current = L.marker([selectedCity.lat, selectedCity.lon])
      .addTo(mapRef.current)
      .bindPopup(`<b>${selectedCity.nome}</b>`)
      .openPopup();
  }, [selectedCity]);

  useEffect(() => {
    if (!mapRef.current || !irradiationData) return;

    // Remove polígono anterior
    if (polygonRef.current) {
      polygonRef.current.remove();
      polygonRef.current = null;
    }

    try {
      // Extrai as coordenadas do polígono da string WKT
      const coordsStr = irradiationData.geom
        .replace('POLYGON((', '')
        .replace('))', '');
      const coords = coordsStr.split(',').map(coord => {
        const [lon, lat] = coord.trim().split(' ');
        return [parseFloat(lat), parseFloat(lon)];
      });

      // Adiciona o polígono ao mapa
      polygonRef.current = L.polygon(coords, {
        color: darkMode ? '#ff9800' : '#1976d2',
        fillOpacity: 0.2,
      }).addTo(mapRef.current);
    } catch (error) {
      console.error('Erro ao processar geometria:', error);
    }
  }, [irradiationData, darkMode]);

  return <MapContainer ref={mapContainerRef} />;
};

export default MapView;