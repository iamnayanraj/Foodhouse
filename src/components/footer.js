import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { name, email } = useContext(userContext);

  return (
    <h4>
      {name}-{email} is logged in
    </h4>
  );
};

export default Footer;
