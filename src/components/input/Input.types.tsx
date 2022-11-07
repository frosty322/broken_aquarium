import React from "react";
import { Language } from "../../utils/types";

export type InputProps = {
  boxes: number[];
  setBoxes: React.Dispatch<React.SetStateAction<number[]>>;
  lang: Language;
};
