let defaultState = {
    genres: []
};

const genresReducer = (state = defaultState, action) => {
    switch (action) {
        case 'FETCH_GENRES_SUCCESS':
            return {
                ...state,
                genres: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default genresReducer;