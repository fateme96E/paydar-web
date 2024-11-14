import axios from "axios";
import { GetToken } from "./HandleToken";

const client = axios.create({
  baseURL: "http://194.59.170.201:5555/api/",
});

export const get = (path, params=null, showHeaders=false) => {
  let headers = {
  }

  if (GetToken()) {
      headers = {
          'Authorization': `${GetToken()}`
      }
  }

  const onSuccess = (response) => {
      console.error('Get Request Successful!')
      if(showHeaders) return response
      else return response.data
  }

  const onError = (error) => {
      console.error('Get Request Failed:')
      console.error(error)

      return Promise.reject(error.response || error.message)
  }

  return client.get(path, {
      params: {...params, sortBy: 'createdAt', orderBy: 'desc'},
      headers
  })
  .then(onSuccess)
  .catch(onError)
}

export function post(path, data, params) {
  let headers = {}
  if (GetToken()) {
      headers = {
          'Content-Type': 'application/json',
          'Authorization': `${GetToken()}`
      }
  } else {
      headers = {
          'Content-Type': 'application/json',
      }
  }

  const onSuccess = (response) => {
      console.error('Post Request Successful!')
      return response.data
  }

  const onError = (error) => {
      console.error('Post Request Failed:')
      console.error(error)

      return Promise.reject(error.response || error.message)
  }

  return client.post(path, data, {
      headers,
      params
  })
      .then(onSuccess)
      .catch(onError);
}

export function patch(path, data, params) {
  let headers = {}
  if (GetToken()) {
      headers = {
          'Content-Type': 'application/json',
          'Authorization': `${GetToken()}`
      }
  } else {
      headers = {
          'Content-Type': 'application/json',
      }
  }

  const onSuccess = (response) => {
      console.error('Patch Request Successful!')
      return response.data
  }

  const onError = (error) => {
      console.error('Patch Request Failed:')
      console.error(error)

      return Promise.reject(error.response || error.message)
  }

  return client.patch(path, data, {
      headers,
      params
  })
      .then(onSuccess)
      .catch(onError);
}

export function del(path, params) {
  let headers = {}
  if (GetToken()) {
      headers = {
          'Content-Type': 'application/json',
          'Authorization': `${GetToken()}`
      }
  } else {
      headers = {
          'Content-Type': 'application/json',
      }
  }

  const onSuccess = (response) => {
      console.error('Delete Request Successful!')
      return response.data
  }

  const onError = (error) => {
      console.error('Delete Request Failed:')
      console.error(error)

      return Promise.reject(error.response || error.message)
  }

  return client.delete(path, {
      headers,
      params
  })
      .then(onSuccess)
      .catch(onError);
}

export function upload(path, data, params) {
    let headers = {}
    if (GetToken()) {
        headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `${GetToken()}`
        }
    } else {
        headers= {
            'Content-Type': 'multipart/form-data',
        }
    }
  
    const onSuccess = (response) => {
        console.error('Post Request Successful!')
        return response.data
    }
  
    const onError = (error) => {
        console.error('Post Request Failed:')
        console.error(error)
  
        return Promise.reject(error.response || error.message)
    }
  
    return client.post(path, data, {
        headers,
        params
    })
        .then(onSuccess)
        .catch(onError);
  }