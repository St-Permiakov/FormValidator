import { getInputData } from './get-input';

/**
 * Returns all inputs with values and rulesets
 * @param {HTMLFormElement} form
 * @param {string} selector - input group classname
 * @public
 * @returns {Array<{name: string, type: string, value: string, checked?: boolean, ruleset: Object<string, string>}>}
 */
export function getFormInputsData(form, selector) {
    const inputs = [];

    form.querySelectorAll(selector).forEach((group) => {
        const input = group.querySelector('input');

        inputs.push(getInputData(input));
    });

    return inputs;
}
