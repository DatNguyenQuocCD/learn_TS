export function Login(password: String) {
  if (password.length >= 8) {
    return 'Password true';
  }
  return 'Password fail';
}

console.log(Login('12345678'));
