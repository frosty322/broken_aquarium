import React, { useState } from "react";
import Canvas from "../components/canvas/Canvas";
import Draw from "../Controll/Draw/Draw";
import LOCALE from "./Aqurium.locale";
import Input from "../components/input";
import Styled from "./Aquarium.style";
import { Language } from "../utils/types";
import langDictionary from "../utils/dictionary";

function Aqurium() {
  const [boxes, setBoxes] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>(Language.RUS);
  const handleChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case langDictionary[Language.RUS]: {
        setLang(Language.RUS);
        break;
      }
      case langDictionary[Language.ENG]: {
        setLang(Language.ENG);
        break;
      }
    }
  };
  return (
    <div>
      <form>
        <label>
          <input
            onChange={handleChangeLang}
            id={langDictionary[Language.RUS]}
            checked={lang === Language.RUS}
            type="radio"
            name="question"
          />
          {langDictionary[Language.RUS]}
        </label>
        <label>
          <input
            onChange={handleChangeLang}
            checked={lang === Language.ENG}
            id={langDictionary[Language.ENG]}
            type="radio"
            name="question"
          />
          {langDictionary[Language.ENG]}
        </label>
      </form>

      <h1>{LOCALE[lang].TITLE}</h1>
      <Input lang={lang} boxes={boxes} setBoxes={setBoxes} />
      <h2>{`${LOCALE[lang].RESULT} ${result}`}</h2>
      <h2>{LOCALE[lang].AQUARIUM}</h2>
      <Styled.MainBox className="main-box">
        <Canvas draw={Draw(boxes, setResult)} />
      </Styled.MainBox>
    </div>
  );
}

export default Aqurium;
