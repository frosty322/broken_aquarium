import { Language } from "../../utils/types";

export default {
  [Language.RUS]: {
    TITLE: "Конфигурация аквариума",
    EXPLAIN:
      "Введите через запятую натуральные числа, максимальный размер аквариума 100000х100000",
    ERROR: "Конфигурация введена неправильно",
    PLACEHOLDER: "4,2,3,5,0",
    BUTTON: "Ввести"
  },
  [Language.ENG]: {
    TITLE: "Aquarium configuration",
    EXPLAIN:
      "Enter natural numbers separated by commas, the maximum size of the aquarium is 100000x100000",
    ERROR: "Configuration entered incorrectly",
    PLACEHOLDER: "4,2,3,5,0",
    BUTTON: "Enter"
  },
};
