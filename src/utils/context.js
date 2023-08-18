import { createContext } from "react";

export const userContext = createContext({
  user: {
    name: "guest",
    email: "guest@email.com",
  },
  setUser: () => {},
});

export const authContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});
