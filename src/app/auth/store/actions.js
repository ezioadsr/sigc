import localforage from 'localforage'

const login = ({commit, reject}, object) => {
  // const {login, password} = object

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IkpvaG4gRG9lIiwicHJldmlsZWdlIjp0cnVlfQ.PMblP1Nu4nyvm7LUZdvRSXKg3OcP7imTmLf20lFTEl8'

  return new Promise(async (resolve) => {
    await localforage.setItem('token', token)

    commit('SET_TOKEN', token)
    commit('SET_AUTH_ATTRIBUTES', token)

    resolve(token)
  })
}

const logout = ({commit}) => {
  return new Promise(async (resolve) => {
    let token = await localforage.getItem('token')
    await localforage.removeItem('token')

    commit('REMOVE_TOKEN')

    resolve(token)
  })
}

export default {
  login, logout
}
