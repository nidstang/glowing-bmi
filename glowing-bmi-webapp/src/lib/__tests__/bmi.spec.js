import { MALE, FEMALE } from '../constants.js';
import { bmi, Person } from '../bmi.js';

describe('BMI tests', () => {
    test('Given a male Person object, bmi function must return the their bmi number', () => {
        expect(bmi(Person({ weight: 60, height: 185, age: 28, sex: MALE }))).toBe(1621);
    });

    test('Given an age, weight, height and sex, Person must return a new person object', () => {
        const p = Person({
            weight: 50,
            height: 100,
            age: 18,
            sex: FEMALE
        });

        expect(p).toEqual({
            weight: 50,
            height: 100,
            age: 18,
            sex: FEMALE
        });
    });

});