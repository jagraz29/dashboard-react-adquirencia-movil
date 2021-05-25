import { config } from '../config/enviroment'
import { StorageService } from './storageService'
import axios from 'axios'

export class DataService {
  get(endpoint: string, body = null) {
    const trama = {
      headerIn: this.headerIn(),
      bodyIn: body,
    }
    const requestOptions: any = {
      method: 'POST',
      headers: this.header(),
      body: JSON.stringify(trama),
    }
    const api_endpoint = config.api + endpoint

    return axios.get(api_endpoint, requestOptions)
  }

  post(endpoint: string, body: any | null = null) {
    const option = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    const api_endpoint = config.api + endpoint
    return axios.post(api_endpoint, body, option)
  }

  header() {
    const header = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
    return header
  }

  headerIn() {
    const token = new StorageService().getSession()
    const headerIn = config.headerIn
    if (token) {
      headerIn.token = token
    }
    return headerIn
  }

  /* Conexiones a elastic search */

  postElastic(endpoint: string, body: any | null = null, filter: any | null = null) {
    const option = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    let api_body

    if (filter !== null) {
      api_body = filter
    } else {
      api_body = {
        url: config.api,
        filter: {
          origin: config.landingIdentifier,
          [body.name]: body.value,
        },
      }
    }

    const api_endpoint = config.api + endpoint
    return axios.post(api_endpoint, api_body, option)
  }
}
