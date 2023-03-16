import { createContext, useContext } from "react";
import useJob from "../hooks/useJobReducer";

const jobContext = createContext(null);

export const useJobContext = () => {
  return useContext(jobContext);
};

const JobProvider = ({ children }) => {
  const job = useJob();
  return <jobContext.Provider value={job}>{children}</jobContext.Provider>;
};

export default JobProvider;
