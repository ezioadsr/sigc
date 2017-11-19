import decode from 'jwt-decode'

const SET_TOKEN = (state, token) => {
  state.token = token
}

const SET_AUTH_ATTRIBUTES = (state, token) => {
  let decoded = decode(token)

  state.name = state.avatar = state.email = ''

  if (decoded.hasOwnProperty('name')) {
    state.name = decoded.name
  }

  if (decoded.hasOwnProperty('avatar')) {
    state.avatar = decoded.avatar
  }

  if (decoded.hasOwnProperty('email')) {
    state.email = decoded.email
  }

  if (decoded.hasOwnProperty('gender')) {
    state.gender = decoded.gender
  }
}

const REMOVE_TOKEN = (state) => {
  state.token = ''
}
export default {
  SET_AUTH_ATTRIBUTES, SET_TOKEN, REMOVE_TOKEN
}
