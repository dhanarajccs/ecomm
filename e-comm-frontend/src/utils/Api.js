import {config} from './config'

const getRequest = async path => {
  try {
    const params = {
      method: 'GET',
      headers: {
      },
    }
    const res = await fetch(config.baseURL + path, params)
    // console.log({res})
    const data = await res.text()
    return {statusCode: res.status, data}
  } catch (e) {
    console.log(`error in get Request (${path}) :- `, e)
  }
}

const postRequest = async (path, body) => {
  try {
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }

    const res = await fetch(config.baseURL + path, params)
    // console.log(res)

    const data = await res.text()
    return {statusCode: res.status, data}
  } catch (e) {
    console.log(`error in post Request (${path}) :- `, e)
  }
}

const DeleteRequest = async path => {
  try {
    const params = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await fetch(config.baseURL + path, params)

    const data = await res.text()
    return {statusCode: res.status, data}
  } catch (e) {
    console.log(`error in Delete Request (${path}) :- `, e)
  }
}

const putRequest = async (path, body) => {
  try {
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }

    const res = await fetch(config.baseURL + path, params)

    const data = await res.text()
    return {statusCode: res.status, data}
  } catch (e) {
    console.log(`error in PUT Request (${path}) :- `, e)
  }
}

export const Api = {
  getRequest,
  postRequest,
  DeleteRequest,
  putRequest,
}
