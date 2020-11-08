import Constants from '../constants.js';
import Person from '../person.js';

describe('Person tests', () => {
    describe('Given props, Person must return a valid person object', () => {
        const person = Person({
            weight: 60,
            height: 185,
            age: 28,
            sex: Constants.MALE,
            weeklyExerciseRate: Constants.WEEKLY_EXERCISE.MODERATE,
            losingFatRate: Constants.LOSING_FAT_RATE.HIGHT,
            bodyMassRate: Constants.BODY_MASS_RATE.LOW,
        });

        test('Person.bmi must return the correct bmi for this person', () => {
            expect(person.bmi()).toBe(1621);
        });

        test('Person.mc must return the correct mc for this person', () => {
            expect(person.mc()).toBe(2513);
        });

        test('Person.lfc must return the correct lfc value for this person', () => {
            expect(person.lfc()).toBe(2029);

        });

    });
});
