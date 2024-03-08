const useApiCall = async (url, type, body) => {
    try {
        const response = await fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                body
            })
        })
        if (!response.ok) {
            console.log('some error in calling the api', response)
        }
        else {
            const data = await response.json()
            console.log('ppppppp', data)
            return data
        }
    }
    catch (error) {
        console.log('some error occured', error)
    }
}

export default useApiCall