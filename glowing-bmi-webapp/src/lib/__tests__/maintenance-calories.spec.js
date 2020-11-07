import { mc } from '../mc.js'; 
import { WEEKLY_EXERCISE, FEMALE, MALE } from '../constants.js';

describe('MC tests', () => {
    test('Given a male and a weekly exercise, MC must return daily maintenance calories', () => {
        expect(mc(MALE, WEEKLY_EXERCISE.NONE)).toBe(1946); 
        expect(mc(MALE, WEEKLY_EXERCISE.LIGHT)).toBe(2229); 
        expect(mc(MALE, WEEKLY_EXERCISE.MODERATE)).toBe(2513);
        expect(mc(MALE, WEEKLY_EXERCISE.HARD)).toBe(2797); 
    });

    test('Given a female and a weekly exercise, MC must return daily maintenance calories', () => {
        expect(mc(FEMALE, WEEKLY_EXERCISE.NONE)).toBe(1742); 
        expect(mc(FEMALE, WEEKLY_EXERCISE.LIGHT)).toBe(1995); 
        expect(mc(FEMALE, WEEKLY_EXERCISE.MODERATE)).toBe(2249);
        expect(mc(FEMALE, WEEKLY_EXERCISE.HARD)).toBe(2503); 
    });
});