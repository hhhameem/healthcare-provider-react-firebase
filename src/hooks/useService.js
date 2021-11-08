import { useContext } from "react";
import { ServiceContext } from "../ContextProvider/ServiceProvider";

const useService = () => {
  return useContext(ServiceContext);
};

export default useService;
