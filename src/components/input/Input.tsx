import React, { useState } from "react";
import LOCALE from "./Input.locale";
import Style from "./Input.style";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  const [err, setErr] = useState<boolean>(false);
  const [middleWare, setMiddleWare] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleWare(e.target.value);
  };
  const handleClick = () => {
    const aa = middleWare.replace(" ", "").split(",");
    console.log(aa);
    if (aa.length > 100000 || aa.length === 0) {
      setErr(true);
      return;
    }
    console.log("hnh");
    let errInList = false;
    const resAa = aa
      .map((char) => {
        console.log(isNaN(Number(char)));
        if (isNaN(Number(char)) || Number(char) > 100000) {
          errInList = true;
          return null;
        }
        return Number(char);
      })
      .filter((n): n is number => n !== null);
    console.log(errInList);
    if (errInList || resAa.length === 0) {
      setErr(true);
      return;
    }
    console.log(resAa);
    setErr(false);
    props.setBoxes(resAa);
  };
  return (
    <div>
      <div>
        <span>{LOCALE.TITLE}</span>
      </div>
      <div>
        <input
          value={middleWare}
          onChange={handleChange}
          type="text"
          placeholder={LOCALE.H}
        />
        <button onClick={handleClick}>Ввести</button>
      </div>
      <div>
        <span>{LOCALE.EXPLAIN}</span>
      </div>
      <div>{err && <span>{LOCALE.ERROR}</span>}</div>
    </div>
  );
};

export default Input;