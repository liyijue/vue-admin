import cookie from 'cookiejs'

export function getUserName() {
  return cookie.get('username') || ''
}

export function setUserName(username) {
  return cookie.set('username', username)
}

export function getToken() {
  return cookie.get('token') || ''
}

export function setToken(token) {
  return cookie.set('token', token)
}
