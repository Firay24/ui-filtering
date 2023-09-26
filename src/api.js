const BASE_URL = 'http://localhost:5000'

async function getAll() {
    const response = await fetch(`${BASE_URL}/orders`);
    const responseJson = await response.json();

    if(!responseJson) {
        return{ error: true, data: null }
    }
    return { error: false, data: responseJson };
}

async function getSuplier() {
    const response = await fetch(`${BASE_URL}/orders/supplier`);
    const responseJson = await response.json()

    if(!responseJson) {
        return { error: true, data: null }
    }
    return { error: false, data: responseJson }
}

async function getService() {
    const response = await fetch(`${BASE_URL}/orders/service`);
    const responseJson = await response.json()

    if(!responseJson) {
        return { error: true, data: null }
    }
    return { error: false, data: responseJson }
}

export {
    getAll,
    getSuplier,
    getService
}
