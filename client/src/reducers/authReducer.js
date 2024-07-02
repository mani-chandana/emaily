import { FETCH_USER } from "../actions/types";
export default function (state = {
    userData: {}
}, action) {
    console.log('action', action);
    switch (action.type) {
        
        case FETCH_USER:{
            console.log("response", action.payload)
            return {
                userData: action.payload,
                ...state
            };
        }
        default:
            return state;
    }

}