import { createContext } from "react";

const userContext = createContext({
  name: "guest",
  email: "guestemail@gmail.com",
});

export default userContext;
