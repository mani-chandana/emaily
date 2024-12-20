import axios from "axios"
import { FETCH_USER } from "./types"


export const fetchUser = () => async dispatch => {
    try {
        const response = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: response.data });
    } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error or dispatch another action if needed
    }
};