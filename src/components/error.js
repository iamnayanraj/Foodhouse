import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorObj = useRouteError();
  console.log(errorObj);
  return (
    <>
      <h1>Ooops!!</h1>
      <h3>Something went wrong</h3>
      <h3>{errorObj.data}</h3>
      <h3>Http status:{errorObj.status}</h3>
    </>
  );
};

export default Error;
