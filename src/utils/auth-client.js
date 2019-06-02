import client from './api-client'

const localStorageKey = '__chatat_token__'
const localStorageUser = '__chatat_user__'

function handleUserResponse({data}) {
 const token = data.hash;
  window.localStorage.setItem(localStorageKey, token);
  window.localStorage.setItem(localStorageUser, data);
  return data
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null);
  }
  const body = {body: { "hash": token}}
  return client('loginbyhash', body, 'POST').catch(error => {
    logout()
    return Promise.reject(error)
  })
}

function login({email, password}) {
  return client('login', {body: {email, password}}, 'POST').then(handleUserResponse)
}

function register({nama, username, email, password}) {
  return client('register', {body: {nama, username, email, password, paketid: "20192718199383289456"}}, 'PUT')
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
  window.localStorage.removeItem(localStorageUser)
  return Promise.resolve()
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

export {login, register, logout, getToken, getUser}
