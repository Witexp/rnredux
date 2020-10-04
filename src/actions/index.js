import { ADD_REGION } from "../actiontypes"

export const addRegion = (value) => {
    console.log('value region', value)
    return {
        type: ADD_REGION,
        payload: value
    }
}