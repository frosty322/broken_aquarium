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
  const { lang } = props;
  const handleClick = () => {
    const aa = middleWare.replace(" ", "").split(",");
    if (aa.length > 100000 || aa.length === 0) {
      setErr(true);
      return;
    }
    let errInList = false;
    const resAa = aa
      .map((char) => {
        console.log(isNaN(Number(char)));
        if (isNaN(Number(char)) || Number(char) > 100000 || Number(char) < 0) {
          errInList = true;
          return null;
        }
        return Number(char);
      })
      .filter((n): n is number => n !== null);
    if (errInList || resAa.length === 0) {
      setErr(true);
      return;
    }
    setErr(false);
    props.setBoxes(resAa);
  };
  return (
    <div>
      <div>
        <span>{LOCALE[lang].TITLE}</span>
      </div>
      <div>
        <input
          value={middleWare}
          onChange={handleChange}
          type="text"
          placeholder={LOCALE[lang].PLACEHOLDER}
        />
        <button onClick={handleClick}>Ввести</button>
      </div>
      <div>
        <span>{LOCALE[lang].EXPLAIN}</span>
      </div>
      <div>{err && <span>{LOCALE[lang].ERROR}</span>}</div>
    </div>
  );
};

export default Input;
