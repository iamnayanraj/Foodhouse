import { useContext } from "react";
import { authContext, userContext } from "../utils/context";

const Signin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(authContext);
  const { setUser } = useContext(userContext);

  const authenticate = () => {
    //some logic to authenticate. Currenlty making it true always
    // logic to get aunthenticated loggedin user

    const loggedInUser = {
      name: "Nayan Raj",
      email: "nr@gmail.com",
    };
    setUser(loggedInUser);
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setUser({
      name: "guest user",
      email: "guestuser@email.com",
    });

    setIsAuthenticated(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <button
          onClick={() => {
            authenticate();
          }}
          className="signin-button"
        >
          Signin
        </button>
      ) : (
        <button
          onClick={() => {
            logOut();
          }}
          className="logout-button"
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Signin;
