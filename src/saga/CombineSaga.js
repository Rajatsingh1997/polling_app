import { all, takeLatest } from "redux-saga/effects";
import * as actions from  '../redux/action/actions';
import SignUpsaga from  "./SignUpsaga";
import SignInsaga from "./SignInsaga";
import { pollListSaga }  from "./pollListsaga";
import { DeletePollSaga } from "./deletepollsaga";
import { CreateNewPollSaga } from "./addNewpollsaga";

function* watchAllSaga(){
    yield takeLatest (actions.SignUpRequest,SignUpsaga)
    yield takeLatest (actions.SignInRequest,SignInsaga)
    yield takeLatest(actions.PollListRequest,pollListSaga)
    yield takeLatest(actions.DeletePollRequest,DeletePollSaga)
    yield takeLatest(actions.CreateNewPollRequest,CreateNewPollSaga)
}

export default function* rootSaga(){
   yield all ([watchAllSaga()]); 
} 