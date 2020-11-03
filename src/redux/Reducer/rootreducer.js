import { combineReducers} from 'redux';
import SignUpReducer from './SignUpreducer';
import LoginReducer from './SignInreducer';
import PollListReducer from "./pollListReducer";
import DeletePollreducer from "./deletepollreducer";
import CreateNewPollreducer from "./addNewpollreducer";

const rootReducer = combineReducers({
    SignUpStatus: SignUpReducer,
    LoginStatus: LoginReducer,
    PollListStatus: PollListReducer,
    DeletePollstatus: DeletePollreducer,
    AddPollstatus:CreateNewPollreducer,
});

export default rootReducer;


