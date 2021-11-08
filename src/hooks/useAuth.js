import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
