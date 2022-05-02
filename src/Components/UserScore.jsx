import React, { useState } from "react";

const UserScore = ({ name, label }) => {
  const [state, setState] = useState("");
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={state}
        name={name}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default UserScore;
