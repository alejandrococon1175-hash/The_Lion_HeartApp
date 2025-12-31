export interface UserProfile {
  uid: string;
  email: string;
  hasCompletedAnamnesis: boolean;
  role: 'admin' | 'client';
}

export interface AnamnesisData {
  nombre: string;
  edad: number;
  peso: number;
  estatura: number;
  objetivo: string;
  lesiones: string;
  estiloVida: string;
}
