export function bodyRegister() {
    const uniqueId = new Date().getTime();
    return {
        username: `user-${uniqueId}`,
        password: 'rahasia',
        name: 'Testing'
    }
}

export function bodyLogin(username) {
    return {
        username: username,
        password: 'rahasia'
    }
}