import {Login} from '../screens/Login';
describe('isLogin', () => {
  it('should return true when password > 8', () => {
    expect(Login('123456789')).toBe('Password true');
  });
  it('should return false when n = 0', () => {
    expect(Login('12345678')).toBe('Password true');
  });
  it('should return false when n < 0', () => {
    expect(Login('123')).toBe('Password fail');
    expect(Login('1234')).toBe('Password fail');
    expect(Login('12345')).toBe('Password fail');
  });
});
