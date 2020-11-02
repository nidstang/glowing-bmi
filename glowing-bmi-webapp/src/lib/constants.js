export const WEIGHT_FACTOR = 10;
export const HEIGHT_FACTOR = 6.25;
export const AGE_FACTOR = 5;
export const FEMALE_MOD = -161;
export const MALE_MOD = 5;
export const FEMALE = 'F';
export const MALE = 'M';

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
};