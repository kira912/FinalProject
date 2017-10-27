import axios from 'axios'

// Authentication
function errHandler (err) {
  console.error('API', err)
}
void errHandler

const auth = axios.create({
  baseURL: 'http://localhost:3000/api'
})

function saveUserInfo ({token, user}) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
}

export function checkUser (vm) {
  const token = localStorage.getItem('token')
  const userInfo = localStorage.getItem('user')
  if (token && userInfo) {
    const user = JSON.parse(userInfo)
    saveUserInfo({
      token,
      user
    })
    vm.user = user
  }
}

export function login (username, password, vm) {
  return auth.post('/login', {
    username,
    password
  })
    .then(response => {
      saveUserInfo(response.data)
      vm.user = response.data.user
      return response.data
    })
}

export function getMyInfo () {
  return auth.get('/secret').then(response => response.data)
}

export function logout (vm) {
  localStorage.removeItem('token')
  vm.user = null
  delete axios.defaults.headers.common['Authorization']
}

// Entities
export function getEntities () {
  return auth.get('/entities').then(response => {
    return response.data
  })
}

export function newEntity (entityInfo) {
  return auth.post('/entities/', entityInfo).then(response => {
    return response.data
  })
}

export function editEntity (id, entityInfo) {
  return auth.patch('/entities/' + id, entityInfo).then(response => {
    return response.data
  })
}

export function getSingleEntity (id) {
  return auth.get('/entities/' + id).then(response => {
    return response.data
  })
}

// Users

export function getUsers () {
  return auth.get('/users').then(response => {
    return response.data
  })
}

export function getSingleUser (id) {
  return auth.get('/users/' + id).then(response => {
    return response.data
  })
}

export function editUser (id, userInfo) {
  return auth.patch('/entities/' + id, userInfo).then(response => {
    return response.data
  })
}
