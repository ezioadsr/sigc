// noinspection JSUnresolvedVariable
const env = process.env

// noinspection JSUnresolvedVariable
export const strict = env.NODE_ENV !== 'production'

// noinspection JSUnresolvedVariable
export const APP_NAME = env.APP.NAME

// noinspection JSUnresolvedVariable
export const APP_USER = env.APP.USER

// noinspection JSUnresolvedVariable
const api = env.API

// noinspection JSUnresolvedVariable
export const API_URL = api.PROTOCOL + '://' + api.DOMAIN + (api.PORT ? ':' + api.PORT : '') + api.PATH
