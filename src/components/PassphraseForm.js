import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./store/AppContext";

const PassphraseForm = () => {
  const [pass, setPass] = useState("");
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass === appCtx.passPhrase) {
      navigate("content");
    }
    console.log("submit");
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="pass">Pass</label>
      <input type="text" value={pass} onChange={passHandler} />
      <button type="submit">submit</button>
    </form>
  );
};

export default PassphraseForm;
