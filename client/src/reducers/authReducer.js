import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER: {
            console.log("this log")
            return action.payload || false;
        }
       
        default:
            return state;
    }

}