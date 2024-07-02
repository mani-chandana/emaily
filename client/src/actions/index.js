import axios from "axios"
import { FETCH_USER } from "./types"


export const fetchUser = () => {
    return () => {
        console.log("inside fetch user")
        axios
            .get('/api/current_user')
            .then((response) => {
                return ({ type: FETCH_USER, payload: response })
            })
    }

}