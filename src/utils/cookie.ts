import jsCookie from 'js-cookie';

export function setToken(params: string) {
  jsCookie.set('token', params, {
    expires: 1,
  });
}

export function getToken() {
  return jsCookie.get('token');
}
