let calculationButton, resetButton;
const resultWindow = document.querySelector('.counter__result');
const coefficients = new Map([
    ['min', 1.2],
    ['low', 1.375],
    ['medium', 1.55],
    ['high', 1.725],
    ['max', 1.9]]);


function addCalculationListeners(b1, b2) {
    calculationButton = b1;
    resetButton = b2;

    calculationButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        const constant = document.querySelector('input[name="gender"]:checked').value === 'male' ? 5 : -161;
        const coefficient = coefficients.get(document.querySelector('input[name="activity"]:checked').value);
        const res = calculateRes(constant, coefficient);

        resultWindow.classList.remove('counter__result--hidden');
        resultWindow.querySelector('#calories-norm').textContent = res;
        resultWindow.querySelector('#calories-minimal').textContent = res - res * 0.15;
        resultWindow.querySelector('#calories-maximal').textContent = res + res * 0.15;
    });

    resetButton.addEventListener('click', () => resultWindow.classList.add('counter__result--hidden'));
}

function calculateRes(constant, coefficient) {
    const age = document.querySelector('#age').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    return ((10 * weight) + (6.25 * height) - (5 * age) + constant) * coefficient;
}

export {addCalculationListeners};
