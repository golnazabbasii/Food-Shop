
import * as actions from "../actions/actionTypes";
import updateObject from "../index" 

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const start=(state)=>{return updateObject(state,{loading:true})};
const success=(state,action)=>{return updateObject(state,{token:action.token,userId:1,loading:false})};
const fail=(state,action)=>{return updateObject(state,{error:action.error,loading:false})};
const logout=(state,action)=>{return updateObject(state,{token:null,userId:null},localStorage.removeItem("token"),localStorage.removeItem("expire"))};


const authReducer=(state=initialState,action)=>{

    switch(action.type){
 case actions.start : return start(state,action);
 case actions.success : return success(state,action);
 case actions.fail : return fail(state,action);
 case actions.logout : return logout(state,action);
 default : return state
 
    }
}

export default authReducer