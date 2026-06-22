export const url = {
    dev: 'https://postman-echo.com',
    canary: 'https://canary-postman-echo.com',
    prod: 'https://postman-echo.com'
}

export function baseUrl(env) {
    return url[env] || url.dev // Default ke 'dev' jika env tidak dikenal
} 