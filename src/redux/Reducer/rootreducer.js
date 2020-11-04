import { combineReducers} from 'redux';
import SignUpReducer from './SignUpreducer';
import LoginReducer from './SignInreducer';
import PollListReducer from "./pollListReducer";
import DeletePollreducer from "./deletepollreducer";
import CreateNewPollreducer from "./addNewpollreducer";
import UpdateTitlereducer from "./updatepolltitile";
import AddNewOptionreducer from "./addnewoption";
import DeleteOptionreducer from "./deleteoptionreducer";
import PollReducer from "./pollreducer";

const rootReducer = combineReducers({
    SignUpStatus: SignUpReducer,
    LoginStatus: LoginReducer,
    PollListStatus: PollListReducer,
    DeletePollstatus: DeletePollreducer,
    AddPollstatus:CreateNewPollreducer,
    UpdateTitlestatus: UpdateTitlereducer,
    AddNewOptionstatus: AddNewOptionreducer,
    DeleteOptionstatus: DeleteOptionreducer,
    PollStatus:PollReducer,
});

export default rootReducer;


