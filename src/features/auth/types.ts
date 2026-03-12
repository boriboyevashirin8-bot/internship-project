export interface User {
  id: string;
  name: string;
  phone: string;
  token: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isRegistering: boolean;
  isLoading: boolean;
  error: string | null;
}
