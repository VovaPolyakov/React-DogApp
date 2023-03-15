import { GET_DATA,GET_DOGS_DATA_REQUESTED,GET_DATA_ERROR,GET_DOGS_DATA_SUCCEED } from "../ducks/data/actions";


export const getDataMiddleWares = (state) => (dispatch) => async (action) => {
    console.log('middlewares')
    if(action.type === GET_DATA){
        dispatch({type:GET_DOGS_DATA_REQUESTED})
        console.log(action.dog)
        const url = {
            akita:'https://dog.ceo/api/breed/akita/images/random',
            chow:'https://dog.ceo/api/breed/chow/images/random',
            boxer:'https://dog.ceo/api/breed/boxer/images/random',
            husky:'https://dog.ceo/api/breed/husky/images/random',
            mix:'https://dog.ceo/api/breed/mix/images/random',
        }[action.dog.toLowerCase()]
        console.log(url)
        try{
            const res = await fetch(url);
            const data = await res.json()
            dispatch({
                type:GET_DOGS_DATA_SUCCEED,
                payload:data
            })
        }catch(error){
            dispatch({
                type: GET_DATA_ERROR,
                payload: error.message,
              });
        }
    }else{
        dispatch(action)
    }
}