export interface UserProviderProps {
  children: React.ReactElement;
  loading?: React.ReactElement;
}

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export interface UserContext {
  user: User | null;
  signOut: () => void;
}
