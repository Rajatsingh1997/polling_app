import { all, takeLatest } from "redux-saga/effects";
import * as actions from  '../redux/Action/action';
import { SignUpsaga } from  "./SignUpsaga";
import { SignInsaga } from "./SignInsaga";

function * watchAllSaga(){
    yield takeLatest (actions.SignUpRequest,SignUpsaga)
    yield takeLatest (actions.SignInRequest,SignInsaga)
}
export default function* rootSaga(){
   yield all ([watchAllSaga()]); 
} 