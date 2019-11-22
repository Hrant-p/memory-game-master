import React from "react";
import src from "../../assets/images/17a78142bear.gif";

export default () => {
  return (
    <div className="win-field">
      <p>Hooray!!!, you won!!!</p>
      <img src={src} alt="bear" />
    </div>
  );
};
