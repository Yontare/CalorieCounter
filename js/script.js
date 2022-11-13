import {addValidationListeners} from "./validation.js";
import {addCalculationListeners} from "./calculation.js";

const calculationButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');

addValidationListeners(calculationButton, resetButton);
addCalculationListeners(calculationButton, resetButton);
