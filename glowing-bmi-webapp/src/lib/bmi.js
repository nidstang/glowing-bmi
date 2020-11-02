import * as R from 'ramda';

export const Person = ({ weight, height, age, sex }) => ({
    weight, height, age, sex
});

const floor = n => Math.floor(n);

const WEIGHT_FACTOR = 10;
const HEIGHT_FACTOR = 6.25;
const AGE_FACTOR = 5;
const FEMALE_MOD = -161;
const MALE_MOD = 5;

const getModBySex = sex => sex === 'F' ? FEMALE_MOD : MALE_MOD;

const getBMIMeasureSums = ({ height, weight }) => ([
    R.multiply(weight, WEIGHT_FACTOR),
    R.multiply(height, HEIGHT_FACTOR),
]);

const subtractAgeFactored = age => acc => R.subtract(acc, age * AGE_FACTOR);

export const bmi = (person) => {
    return R.compose(
        floor,
        subtractAgeFactored(person.age),
        R.sum,
        R.append(getModBySex(person.sex)),
        getBMIMeasureSums,
    )(person);
};