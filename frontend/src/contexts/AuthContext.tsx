import {
  createContext,
  useContext,
  useState,
  useMemo,
  type SetStateAction,
  type Dispatch,
} from "react";
import { QueryClient } from "@tanstack/react-query";

export type user = {
  id: string;
  name: string;
  email: string;
  password?: string;
  favorites: Array<Array<string>>;
};

type AuthContextType = {
  currentUser: user | null;
  login: Dispatch<SetStateAction<user | null>>;
  logout: () => void;
};

// zod please

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<user | null>(null);
  const client = useMemo(() => new QueryClient(), []);
  // {
  //   id: "1",
  //   name: "Abdulhafiz",
  //   email: "Abdulhafiz@gmail.com",
  //   favorites: [
  //     ["eng-bukhari", "1"],
  //     ["eng-bukhari", "11"],
  //     ["eng-bukhari", "111"],
  //   ],
  // }
  // change the above initailly to null later, this is just for test

  const value = useMemo<AuthContextType>(
    () => ({
      currentUser,
      login: setCurrentUser,
      logout: () => {
        setCurrentUser(null);
        Promise.resolve().then(() => client.removeQueries());
      },
    }),
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within <AuthProvider>");
  }
  return context;
}
