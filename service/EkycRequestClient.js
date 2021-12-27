import { simpleGetRequest, simplePostRequest } from './api'

export class EkycRequestClient {
  fetchCustomerInfo = async () => {
    return await simpleGetRequest(`/v1/web/customer/info`, null)
  }
  submitCustomerLogin = async (formValues) => {
    return await simplePostRequest(`/v1/customer/login`, formValues)
  }
}
