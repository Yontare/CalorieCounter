let inputElements = document.querySelectorAll('input[type=number]');
let calculationButton, resetButton;

function addValidationListeners(b1, b2) {
    calculationButton = b1;
    resetButton = b2;

    resetButton.addEventListener('click', () => {
        disableButton(calculationButton)
        resultWindow.classList.add('counter__result--hidden');
    });
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].addEventListener('input', checkButtonAvailability);
    }
}

function checkButtonAvailability() {
    let numberOfFilledInputs = countFilledInputs();
    if (numberOfFilledInputs === inputElements.length) enableButton(calculationButton); else disableButton(calculationButton);
    if (numberOfFilledInputs > 0) enableButton(resetButton); else disableButton(resetButton);
}

function countFilledInputs() {
    let count = 0;
    for (const input of inputElements) {
        if (input.value !== "") count++;
    }

    return count;
}

function enableButton(button) {
    button.removeAttribute('disabled');
}

function disableButton(button) {
    button.setAttribute('disabled', 'true');
}

export {addValidationListeners};
