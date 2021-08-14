export const addMovie = data => {
    return ({
        type: "ADD",
        payload: data 
    })
}

export const offsetMovie = data => {
    return ({
        type: "OFFSET",
        payload: data 
    })
}

export const searchMovie = data => {
    return ({
        type: "SEARCH",
        payload: data 
    })
}