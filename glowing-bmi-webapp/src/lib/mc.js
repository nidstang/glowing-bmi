import { WEEKLY_EXERCISE } from './constants.js';

export const mc = (sex, weeklyExercice) => {
    return WEEKLY_EXERCISE[sex][weeklyExercice];
};