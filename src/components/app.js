import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;
