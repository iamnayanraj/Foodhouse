import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import userContext from "../utils/userContext";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    //get user details. Curretly hardcoded

    const loggedInUser = {
      name: "Nayan Raj",
      email: "nr@gmail.com",
    };
    setUser(loggedInUser);
  }, []);

  return (
    <Provider store={store}>
      <userContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

export default App;
