import React from "react";

const Results = ({ results }) => {
  return Object.keys(results).map((k) => (
    <div
      key={k}
      style={{
        border: "1px solid #eaeaea",
        display: "inline-block",
        padding: ".4rem",
        margin: "0.2rem",
        textAlign: "center",
      }}
    >
      <h4>{k}</h4>
      {results[k]}
    </div>
  ));
};

export default Results;
