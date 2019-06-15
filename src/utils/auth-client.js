import client from './api-client'

const localStorageKey = '__chatat_token__'
const localStorageUser = '__chatat_user__'

function handleUserResponse({data}) {

    const token = data.hash;
    window.localStorage.setItem(localStorageKey, token);
    window.localStorage.setItem(localStorageUser, JSON.stringify(data));
  
  return data
  
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null);
  }
  const body = {body: { "hash": token}}
  return client('costumer/loginbyhash', body, 'POST').catch(error => {
    logout()
    return Promise.reject(error)
  })
}

function login({email, password}) {
  return client('costumer/login', {body: {email, password}}, 'POST').then(handleUserResponse).catch(error => {
    logout()
    return Promise.reject(error)
  })
}

function register({nama, username, email, password}) {
  return client('helper/getconfig',{body: {key: "pakettrialID"}}, 'POST').then(r => {
    return client('costumer/register', {body: {nama, username, email, password, paketid: r.value}}, 'PUT').catch(error => {
      return Promise.reject(error)
    }).catch(error => {
      return Promise.reject(error)})
  })
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