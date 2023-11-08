import { createContext, useEffect, useState } from "react";

export const SuccessContext = createContext({
  rate: "",
  isSuccess: false,
  onSuccess: () => {},
  setRate: (rate) => {},
  isLoading: false,
  showSpinner: () => {}
});

export default function SuccessContextProvider({ children }) {
  const [selectedRate, setSelectedRate] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  function showSpinner() {
    setIsLoading(true)
  }

  function setRate(rate) {
    setSelectedRate(rate);
  }

  function onSuccess() {
    setIsSuccess(prev => !prev);
  }

  const contextValue = {
    rate: selectedRate,
    isSuccess,
    onSuccess,
    setRate,
    isLoading,
    showSpinner
  };

  return (
    <SuccessContext.Provider value={contextValue}>
      {children}
    </SuccessContext.Provider>
  );
}
