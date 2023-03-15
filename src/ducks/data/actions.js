export const GET_DATA = 'GET_DATA'
export const GET_DOGS_DATA_REQUESTED = 'GET_CATS_DATA_REQUESTED';
export const GET_DOGS_DATA_SUCCEED = 'GET_DOGS_DATA_SUCCEED';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';


export const getData = (payload) => {
    return {
        type:GET_DATA,
        dog:payload
    }
}