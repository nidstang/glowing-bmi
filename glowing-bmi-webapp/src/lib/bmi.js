import * as R from 'ramda';
import Constants from './constants.js';

const getPersonMeasuresFactored = ({ height, weight }) => ([
    R.multiply(weight, Constants.WEIGHT_FACTOR),
    R.multiply(height, Constants.HEIGHT_FACTOR),
]);

const subtractAgeFactored = age => acc => R.subtract(acc, age * Constants.AGE_FACTOR);

export const Person = ({ weight, height, age, sex }) => ({
    weight, height, age, sex
});

export const bmi = (person) => {
    return R.compose(
        Math.floor,
        subtractAgeFactored(person.age),
        R.sum,
        R.append(Constants.MOD(person.sex)),
        getPersonMeasuresFactored,
    )(person);
};