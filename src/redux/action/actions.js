import { createAction } from "redux-actions";
import * as actions from "../constant";


export const SignUpRequest = createAction(actions.SIGN_UP_REQUEST);
export const SignUpSuccess = createAction(actions.SIGN_UP_SUCCESS);
export const SignUpError = createAction(actions.SIGN_UP_ERROR);

export const SignInRequest = createAction(actions.SIGN_IN_REQUEST);
export const SignInSuccess = createAction(actions.SIGN_IN_SUCCESS);
export const SignInError = createAction(actions.SIGN_IN_ERROR);


export const PollListRequest = createAction(actions.POLL_LIST_REQUEST);
export const PollListSuccess = createAction(actions.POLL_LIST_SUCCESS);
export const PollListError = createAction(actions.POLL_LIST_ERROR);

export const DeletePollRequest = createAction(actions.DELETE_POLL_REQUEST);
export const DeletePollSuccess = createAction(actions.DELETE_POLL_SUCCESS);
export const DeletePollError = createAction(actions.DELETE_POLL_ERROR);


export const CreateNewPollRequest = createAction(actions.CREATE_NEWPOLL_REQUEST);
export const CreateNewPollSuccess = createAction(actions.CREATE_NEWPOLL_SUCCESS);
export const CreateNewPollError = createAction(actions.CREATE_NEWPOLL_ERROR);


export const UpdatePollTitleRequest = createAction(actions.UPDATE_POLLTITLE_REQUEST);
export const UpdatePollTitleSuccess = createAction(actions.UPDATE_POLLTITLE_SUCCESS);
export const UpdatePollTitleError = createAction(actions.UPDATE_POLLTITLE_ERROR);

export const AddNewOptionRequest = createAction(actions.ADDNEW_OPTIONREQUEST);
export const AddNewOptionSuccess = createAction(actions.ADDNEW_OPTIONSUCCESS);
export const AddNewOptionError = createAction(actions.ADDNEW_OPTIONERROR);

export const DeleteOptionRequest = createAction(actions.DELETE_OPTION_REQUEST);
export const DeleteOptionSuccess = createAction(actions.DELETE_OPTION_SUCCESS);
export const DeleteOptionError = createAction(actions.DELETE_OPTION_ERROR);

export const PollRequest = createAction(actions.POLL_REQUEST);
export const PollSuccess = createAction(actions.POLL_SUCCESS);
export const PollError = createAction(actions.POLL_ERROR);
