import React from "react";
import { Language } from "../../utils/types";

export type LanguageSelectorProps = {
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  lang: Language;
};
