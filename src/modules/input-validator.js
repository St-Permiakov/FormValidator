import validator from 'validator';
import rules from '../assets/rules';

/**
 *
 * @param {Object<string, any>} input
 * @param {string} input.name
 * @param {string} input.value
 * @param {string[]} input.ruleset
 */
export function InputValidator(input) {
    return validator[rules.email](input.value);
}
