import React, { useContext, useState } from "react";
import iconStar from "../assets/icon-star.svg";
import RateItem from "./RateItem";
import { SuccessContext } from "../store/SuccessContext";
import Card from "./UI/Card";

function Rating() {
  const successCtx = useContext(SuccessContext);

  const [selectedRate, setSelectedRate] = useState("");
  const [error, setError] = useState(false)

  function handleRate(e) {
    setSelectedRate(e.target.innerText);
    setError(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validRate = selectedRate.length >= 0 && selectedRate.trim() !== "";
    if (validRate) {
      successCtx.showSpinner();
      successCtx.setRate(selectedRate);
      successCtx.onSuccess();
    } else {
      setError(true)
      return;
    }
  }

  return (
    <Card>
      <div className="dark-bg">
        <img src={iconStar} alt="star-icon" />
      </div>
      <div>
        <h2 className="color-white h2">How did we do?</h2>
        <p className="color-light-grey rate-p">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <ul id="rating-list">
        {Array(1, 2, 3, 4, 5).map((item) => (
          <RateItem
            key={item}
            className={`rate-item ${item == selectedRate ? "active" : ""}`}
            val={item}
            onClick={handleRate}
          />
        ))}
      </ul>
      {error && <p className="error">Please select a number!</p>}
      <button id="button" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </Card>
  );
}

export default Rating;
