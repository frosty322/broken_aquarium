import React, { useState } from "react";
import Canvas from "../components/canvas/Canvas";
import Draw from "../Controll/Draw/Draw";
import LOCALE from "./Aqurium.locale";
import Input from "../components/input";
import Styled from "./Aquarium.style";
import { Language } from "../utils/types";
import LanguageSelector from "../components/language_selector/language_selector";

function Aqurium() {
  const [boxes, setBoxes] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>(Language.RUS);

  return (
    <div>
      <LanguageSelector lang={lang} setLang={setLang} />
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
