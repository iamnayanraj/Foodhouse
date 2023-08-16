import { useState } from "react";

const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuthenticate = () => {
    //some logic to authenticate. Currenlty making it true always
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <button
          onClick={() => {
            isAuthenticate();
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
