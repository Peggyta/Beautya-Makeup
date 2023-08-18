function shortenTitle(title) {
    const splitedTitle = title.split(' ');
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} `
    return newTitle
};

function shortenDescription(description) {
    const splitedDescription = description.split(' ');
    const newDescription = `${splitedDescription[0]} ${splitedDescription[1]} ${splitedDescription[2]} ${splitedDescription[3]} `
    return newDescription
};

function boldSteps(usage) {
    const splitedSteps = usage.split(' ');
    const sliceSteps = `${splitedSteps[0]} ${splitedSteps[1]}`;
    return sliceSteps
};

function usageWithoutSteps(usage) {
    const splitedSteps = usage.split(' ');
    const removeSteps = `${splitedSteps.slice(2)}`.split(',');
    const joinSteps = removeSteps.join(' ');
    return joinSteps;
};

function showLessIngredient(ingredient) {
    const splitedIngredient = ingredient.toString();
    const str = splitedIngredient.split(',').slice(-15);
    const newStr = str.join(',')
    return newStr
};

function showIngredient(item) {
    const splitedIngredient = item.toString();
    const str = splitedIngredient.split(',').slice(0,-15) ;
    const newStr = str.join(',');
    return newStr
};

export {
        shortenTitle,
        shortenDescription, 
        boldSteps, 
        usageWithoutSteps, 
        showLessIngredient,
        showIngredient,
    };