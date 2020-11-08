import { lfc } from '../lfc.js';
import Constants from '../constants.js';

describe('lfc tests', () => {
    test('Given a mc, a losing fat rate and a body mass index, lfc must return losing fat calories', () => {
        expect(lfc(2513, Constants.LOSING_FAT_RATE.HIGHT, Constants.BODY_MASS_RATE.LOW)).toBe(2029);
    });
});