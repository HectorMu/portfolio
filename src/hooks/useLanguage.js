import { useContext } from "react";
import { LangContext } from "../context/LangContextProvider";

const useLanguage = () => {
  return useContext(LangContext);
};
export default useLanguage;
