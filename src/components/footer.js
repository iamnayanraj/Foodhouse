import { useContext } from "react";
import { userContext, authContext } from "../utils/context";

const Footer = () => {
  const { user } = useContext(userContext);
  const { isAuthenticated } = useContext(authContext);

  return (
    <>
      {isAuthenticated && (
        <h4>
          {user.name}-{user.email} is logged in.
        </h4>
      )}
    </>
  );
};

export default Footer;
