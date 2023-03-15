import {GET_DOGS_DATA_REQUESTED,GET_DATA_ERROR,GET_DOGS_DATA_SUCCEED } from "./actions";

export const initialDataState = {
    dog:[
    ],
    isLoading:false,
    error:'',
}

export const dataReducer = (state,action) => {
    switch(action.type){
        case GET_DOGS_DATA_REQUESTED:
            return{
                ...state,
                isLoading:true,
            }
        case GET_DOGS_DATA_SUCCEED:
            return{
                ...state,
                dog:[
                    action.payload
                ]
            }
            alert('Запросил изображение собаки')
        case GET_DATA_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}