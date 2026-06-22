import { sendGet } from "../../utils/http-helpers.js"
import { baseUrl } from "../baseUrl/url.js";
import { header } from "../headers/header.js";

export function detailGet() {

    const forHeader = header

    const environment = __ENV.env || 'dev'
    const Url = baseUrl(environment)

    const res = sendGet(`${Url}/get`, forHeader)
    console.log('Get detail postman response: ', res.json())
    return res
}