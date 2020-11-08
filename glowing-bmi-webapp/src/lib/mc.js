import { WEEKLY_EXERCISE } from './constants.js';

export const mc = (person, weeklyExercice) => {
    return WEEKLY_EXERCISE[person.sex][weeklyExercice];
};