import React, { useContext, useEffect, useState } from "react";
import Rating from "./components/Rating";
import { SuccessContext } from "./store/SuccessContext";
import Success from "./components/Success";
import Spinner from "./components/UI/Spinner";

function App() {
  const successCtx = useContext(SuccessContext);

  useEffect(() => {
    successCtx.showSpinner()
  }, []);

  return (
    <main>
      {successCtx.isLoading ? <Spinner /> : (!successCtx.isSuccess ? <Rating /> : <Success />)}
    </main>
  );
}

export default App;
