import * as action from '../Action/action';


const initialState = {
 isLoading: false,
isSignedUp:false,   
};

export const SignUpreducer = (state=initialState,action) =>{
    switch(action.type){
        case action.SIGN_UP_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        case action.SIGN_UP_SUCCESS:
            return{
                ...state,
                isSignedUp:true,
                isLoading: false,
                response: action.payload,
            };
        case action.SIGN_UP_ERROR:
            return{
                ...state,
                isSignedUp: false,
                isLoading:false,
                error: action.payload,
            };
        default:
            return state;
            
    }
}
export default SignUpreducer;