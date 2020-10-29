import * as action from '../Action/action';
const initialState={
    isLoading:false,
    isSignedIn:false,
}
export const SignInreducer =(state=initialState,action)=>{
    switch(action.type){
        case action.SIGN_IN_REQUEST:
            return{
                ...state,
                isloading:true,
            }
            case action.SIGN_IN_SUCCESS:
                return{
                    ...state,
                    isSignedUp:true,
                    isLoading: false,
                    response: action.payload,
                };
            case action.SIGN_IN_ERROR:
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
export default SignInreducer;