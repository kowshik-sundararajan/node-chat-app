const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var testValue = 100;
        var response = isRealString(testValue);
        expect(response).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var testValue = '     ';
        var response = isRealString(testValue);
        expect(response).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        var testValue = '    Kowshik   ';
        var response = isRealString(testValue);
        expect(response).toBe(true);
    });
})
