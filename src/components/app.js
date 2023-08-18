import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import { userContext, authContext } from "../utils/context";

const App = () => {
  const [user, setUser] = useState({
    name: "guest user",
    email: "guestuser@email.com",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <userContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </authContext.Provider>
    </Provider>
  );
};

export default App;
