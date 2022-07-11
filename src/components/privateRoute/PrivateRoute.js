import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

function PrivateRoute({ children }) {
    const {user} = useGlobalContext();
    return user ? children : <Navigate to="/login" />;
  }

export default PrivateRoute