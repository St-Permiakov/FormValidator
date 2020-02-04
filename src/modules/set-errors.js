import { config } from '../assets/config';

/**
 * Puts errors into DOM
 * @param {HTMLFormElement} form
 * @param {{global: [string], inputs: [{name: string, error: string}]}} errors
 */
export function setErrors(form, errors) {
    /** @type {HTMLElement} */
    const general = form.querySelector(config.items.generalErrCont.selector);

    try {
        while (general.lastChild) general.lastChild.remove();
        errors.global.forEach((error) => {
            global.append(`<div class="${config.items.error.ui.className}">${error}</div>`);
        });
    } catch (err) {
        console.error(err);
    }

    errors.inputs.forEach((error) => {
        try {
            const input = form.querySelector(`[name=${error.name}]`);
            if (!input) throw new Error(`Input with name ${error.name} does not exist`);

            input.querySelector(config.items);
        } catch (err) {
            console.error(err);
        }
    });
}
