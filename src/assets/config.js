import names from './rule-names';

/**
 * @property {Object<string, any>} items - форма
 */
export const config = {
    items: {
        form: {
            selector: '.j-fv-form',
            ui: {
                stateClasses: {},
            },
        },
        inputGroup: {
            selector: '.j-fv-group',
            ui: {
                stateClasses: {},
            },
        },
        input: {
            selector: 'input',
            ui: {
                stateClasses: {},
            },
        },
        error: {
            selector: '.j-fv-error',
            ui: {
                className: 'fv-error',
            },
        },
        generalErrCont: {
            selector: '.j-fv-global',
        },
    },
    errorMessages: {
        [names.alpha]: 'Используйте только буквы, дефис и пробел',
        [names.email]: 'Введите корректный email',
        [names.phone]: 'Введите корректный номер телефона',
    },
};
