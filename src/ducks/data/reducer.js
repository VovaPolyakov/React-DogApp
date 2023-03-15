

export const initialDataState = {
    data:[

    ],
    isLoading:false,
    error:'',
}

export const dataReducer = (state,action) => {
    switch(action.type){
        default:{
            return{
                ...state
            }
        }
    }
}