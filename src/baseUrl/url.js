export const url = {
    dev : 'https://dev-postman-echo.net',
    canary : 'https://canary-postman-echo.com',
    prod : 'https://postman-echo.com'
}

export function baseUrl(env){
    return url[env] || url.dev // Default ke 'dev' jika env tidak dikenal
}