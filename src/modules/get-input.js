/**
 * Returns full input data
 * @param {HTMLInputElement} input
 */
export function getInputData(input) {
    const ruleset = {};

    Object.entries(input.dataset)
        .filter(([key]) => key.match(/^rule/gi))
        .forEach(([key, value]) => { ruleset[key.substr(4).toUpperCase()] = value; });

    return { ...input, ruleset };
}
