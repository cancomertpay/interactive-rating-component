import React, { useContext } from "react";
import Card from "./UI/Card";
import thankYou from "../assets/illustration-thank-you.svg";
import { SuccessContext } from "../store/SuccessContext";
function Success() {
  const successCtx = useContext(SuccessContext);

  return (
    <Card>
      <div className="dark-bg close" onClick={successCtx.onSuccess}>X</div>
      <div className="success-state">
        <img src={thankYou} alt="thank-you" />
        <div className="rate-result primary-orange">
         {`You selected ${successCtx.rate} out of 5`}
        </div>
        <h2 className="color-white m-0">Thank you!</h2>
        <p className="color-light-grey text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </Card>
  );
}

export default Success;
