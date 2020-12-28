import React from "react";
import Loader from "react-loader-spinner";

export const LoaderApp = () => {
  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};
