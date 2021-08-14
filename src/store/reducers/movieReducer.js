const initialState = {
    search: "",
    offset: 1,
    datas: []
}

const movieReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD":
            return {
                ...state,
                datas: payload
            }
        case "OFFSET":
            return {
                ...state,
                offset: payload
            }
        case "SEARCH":
            return {
                ...state,
                search: payload
            }
        default:
            return {
                ...state
            }
    }
}

export default movieReducer