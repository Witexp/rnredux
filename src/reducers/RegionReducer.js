import { ADD_REGION } from '../actiontypes'


const INITIAL_STATE={
    region: 'Тестовый регион'
}

 const RegionReducer = (state=INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type){
        case ADD_REGION: 
            return {
            ...state, 
            region: action.payload
            }
        default: 
            return state
    }
}

export default RegionReducer

 