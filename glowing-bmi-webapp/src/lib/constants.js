export const WEIGHT_FACTOR = 10;
export const HEIGHT_FACTOR = 6.25;
export const AGE_FACTOR = 5;
export const FEMALE_MOD = -161;
export const MALE_MOD = 5;
export const FEMALE = 'FEMALE';
export const MALE = 'MALE';
export const WEEKLY_EXERCISE = {
    NONE: 'NONE',
    LIGHT: 'LIGHT',
    MODERATE: 'MODERATE', 
    HARD: 'HARD',
    MALE: {
        NONE: 1946,
        LIGHT: 2229,
        MODERATE: 2513,
        HARD: 2797,
    },

    FEMALE: {
        NONE: 1742,
        LIGHT: 1995,
        MODERATE: 2249,
        HARD: 2503,
    }
};

export const LOSING_FAT_RATE = {
    REGULAR: 1,
    HIGHT: 0.95
};

export const BODY_MASS_RATE = {
    LOW: 0.15,
    MID: 0.2,
    HIGHT: 0.2,
};

export default {
    WEIGHT_FACTOR,
    HEIGHT_FACTOR,
    AGE_FACTOR,
    FEMALE,
    FEMALE_MOD,
    MALE,
    MALE_MOD,
    MOD(sex) {
        return sex === this.FEMALE ? this.FEMALE_MOD : this.MALE_MOD;
    },
    WEEKLY_EXERCISE,
    LOSING_FAT_RATE,
    BODY_MASS_RATE,
};