// import localforage from 'localforage'

export const isLogged = () => {
  return true // localforage.getItem('token')
}

export const havePermission = (route, token) => {
  return true
  // return token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IkpvaG4gRG9lIiwicHJldmlsZWdlIjp0cnVlfQ.PMblP1Nu4nyvm7LUZdvRSXKg3OcP7imTmLf20lFTEl8'
}

export default {isLogged, havePermission}
