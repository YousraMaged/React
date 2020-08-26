import axios from 'axios';

export function getGenres() {
    return (dispatch) => {
        console.log('dispatching');
        fetch('https://api.deezer.com/genre').then(res => {
            console.log('res', res);
            dispatch(fetchGenresSuccess(res.data))
        }, err => {
            console.log('err', err);
        })
    }
}

export function fetchGenresSuccess(data) {
    return {
        type: 'FETCH_GENRES_SUCCESS',
        payload: data
    }
}