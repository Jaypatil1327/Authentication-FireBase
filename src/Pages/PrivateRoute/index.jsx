import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { user } = useContext(GlobalContext);
  if (user) return children;
  else return <Navigate to={"/register-page"}></Navigate>;
}
export default PrivateRoute;
