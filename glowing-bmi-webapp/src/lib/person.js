import Constants from './constants.js';
import { bmi } from './bmi.js';
import { mc } from './mc.js';
import { lfc } from './lfc.js';

const Person = {
    bmi() {
        return bmi(this);
    },

    mc() {
        return mc(this, this.weeklyExerciseRate);
    },

    lfc() {
        return lfc(this.mc(), this.losingFatRate, this.bodyMassRate);
    }
};

export default ({
    weight = 0,
    height = 0,
    age = 0,
    sex = Constants.FEMALE,
    weeklyExerciseRate = Constants.WEEKLY_EXERCISE.NONE,
    losingFatRate = Constants.LOSING_FAT_RATE.REGULAR,
    bodyMassRate = Constants.BODY_MASS_RATE.MID,
}) => Object.assign({
    weight,
    height,
    age,
    sex,
    weeklyExerciseRate,
    losingFatRate,
    bodyMassRate,
}, Person);