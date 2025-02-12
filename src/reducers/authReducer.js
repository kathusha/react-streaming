import { SIGN_OUT, SIGN_IN } from "../actions/types";

//capitalization is to indicate do not modify
const INTIAL_STATE ={
    isSignedIn: null,
    userId: null
};


export default (state =INTIAL_STATE, action) => {

    switch(action.type){
        case SIGN_IN:
            return{ ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};