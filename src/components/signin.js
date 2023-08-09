import { useState } from "react";

const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuthenticate = () => {
    //some logic to authenticate. Currenlty making it true always

    setIsLoggedIn(!isLoggedIn);
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
            isAuthenticate();
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
