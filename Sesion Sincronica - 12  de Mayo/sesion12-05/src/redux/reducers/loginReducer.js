import { loginTypes } from "../types/loginTypes";



export const loginReducer = ( state = {}, action ) => {

    switch (action.type) {  //"[USR] register"

        case loginTypes.register:  //"[USR] register"

        return action.payload;

        default:

            return state;
    };
};