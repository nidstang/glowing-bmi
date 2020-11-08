import { Person } from '../bmi.js';
import { mc } from '../mc.js'; 
import { WEEKLY_EXERCISE, FEMALE, MALE } from '../constants.js';

describe('MC tests', () => {
    test('Given a male person and a weekly exercise frequency, MC must return daily maintenance calories', () => {
        const male = Person({ sex: MALE });
        expect(mc(male, WEEKLY_EXERCISE.NONE)).toBe(1946); 
        expect(mc(male, WEEKLY_EXERCISE.LIGHT)).toBe(2229); 
        expect(mc(male, WEEKLY_EXERCISE.MODERATE)).toBe(2513);
        expect(mc(male, WEEKLY_EXERCISE.HARD)).toBe(2797); 
    });

    test('Given a female person and a weekly exercise frequency, MC must return daily maintenance calories', () => {
        const female = Person({ sex: FEMALE });
        expect(mc(female, WEEKLY_EXERCISE.NONE)).toBe(1742); 
        expect(mc(female, WEEKLY_EXERCISE.LIGHT)).toBe(1995); 
        expect(mc(female, WEEKLY_EXERCISE.MODERATE)).toBe(2249);
        expect(mc(female, WEEKLY_EXERCISE.HARD)).toBe(2503); 
    });
});