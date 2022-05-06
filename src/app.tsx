const fetchAccount = () => {
    return new Promise((resolve, reject) => {
        resolve({ userId: 10000, role: 'ADMIN' })
    })
}

export async function getInitialState() {
    const data = await fetchAccount()
    return data
}