import { sendPost } from "../../utils/http-helpers.js";
import { bodyPostman } from "../../utils/body-helpers.js";
import { baseUrl } from "../baseUrl/url.js";
import { headerPost } from "../headers/header.js";

export function detailPost(){
    const forHeader = headerPost

    const environment = __ENV.env || 'dev'
    const Url = baseUrl(environment)

    const body = bodyPostman()

    const res = sendPost(`${Url}/post`, forHeader)
    console.log('Get detail postman response: ', res.json())
    return res
}