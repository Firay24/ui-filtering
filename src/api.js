const BASE_URL = 'https://weak-ant-peplum.cyclic.cloud'

async function getAll() {
    const response = await fetch(`${BASE_URL}/orders`);
    const responseJson = await response.json();

    if(!responseJson) {
        return{ error: true, data: null }
    }
    return { error: false, data: responseJson };
}

async function getFilter(conditions, operators) {
    const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            conditions, operators  
        })
    })

    const responseJson = await response.json()

    if (response.status !== 200) {
        console.log(responseJson.message)
        return { error: true }
    }

    return { error: false, data: responseJson }
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
    getService,
    getFilter
}
