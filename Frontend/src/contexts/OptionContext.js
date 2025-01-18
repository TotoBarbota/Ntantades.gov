import { createContext, useContext, useEffect, useState } from "react";

export const OptionContext = createContext();
export const useOptions = () => {
  return useContext(OptionContext);
};

export const OptionProvider = (props) => {
  const [optionDetails, setOptionDetails] = useState({});

  const optionValues = {
    optionDetails,
    setOptionDetails,
  };

  return (
    <OptionContext.Provider value={optionValues}>
      {props.children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
