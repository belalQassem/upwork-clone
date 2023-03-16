
import React from "react";
import { LoadingStyled } from "./style";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="loading-spinner"></div>
      <p className="loading-message">Loading...</p>
    </LoadingStyled>
  );
};

export default Loading;
