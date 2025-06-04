export interface City {
  id: number;
  nome: string;
  lon: number;
  lat: number;
}

export interface IrradiationData {
  id: number;
  anual: number;
  jan: number;
  fev: number;
  mar: number;
  abr: number;
  mai: number;
  jun: number;
  jul: number;
  ago: number;
  set: number;
  out: number;
  nov: number;
  dez: number;
  geom: string;
}

export interface AppContextType {
  cities: City[];
  selectedCity: City | null;
  irradiationData: IrradiationData | null;
  loading: boolean;
  error: string | null;
  fetchCities: () => Promise<void>;
  fetchIrradiationData: (cityId: number) => Promise<void>;
  darkMode: boolean;
  toggleDarkMode: () => void;
}