import React from "react";
import { call, put } from "./redux-saga/effects";
import axiosCall from "../services/index";
import { SignUpSuccess, SignUpError } from "../redux/Action/action";
import jwt from "jsonwebtoken";



function* SignUpsaga(action) {
  try {
    const username = action.payload.username;
    const password = action.payload.password;
    const option = action.payload.option;

    const url = `/login?username=${username}&password=${password}&roll=${option}`;
    
    const response = yield call(
        axiosCall,
        "POST",
        url, 
        );
    
    console.log(response, "response from the API");
    const { data } = response;
    console.log(data, "api data");

    if (data.error == 0) {
      console.log(data.data, "xyzzzzzz")
      yield put(SignUpSuccess(username.role));
    }

    if (data.error == 1) {
      console.log(data.message, "azzzzzzzzzzzzzz");
      yield put(SignUpError(data.message))
    }
  } catch (error) {
    console.log("Unexpacted error occured");
    yield put(SignUpError("unexpected error occured"));
  }
}

export default SignUpsaga;