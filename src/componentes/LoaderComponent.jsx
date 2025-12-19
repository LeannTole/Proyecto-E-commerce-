import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = ({ texto }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Spinner animation="border" role="status" />
      <p>{texto}</p>
    </div>
  );
};

export default LoaderComponent;
