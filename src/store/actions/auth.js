
import axios from "axios";
import * as actionTypes from "./actionTypes"


export const start=()=>{
    return{
        type:actionTypes.start,
    }
}

export const success=(token,userId)=>{
    return{
        type:actionTypes.success,
        token:token,
        userId:userId
    }
}

export const fail=(error)=>{
    return{
        type:actionTypes.fail,
        error:error
    }
}
//  export const logout=()=>{
//      return{
//          type:actionTypes.logout,
//      }
//  }
 export const auth=(email,pasword)=>{
    return dispatch =>{
        dispatch(start());

        const data={
            email:email,
            pasword:pasword
        }
        axios.post("/posts",data).then(
            response=>{
                console.log(response);
                localStorage.setItem("token","mdkei,dkmmsmdk,f03934urg");
                localStorage.setItem("expire",44600)
                 dispatch(success({
                    token:"mdkei,dkmmsmdk,f03934urg",
                    userId:1
                 }));
            }
        )
        .catch(
            error=>{
                 dispatch(fail(error));
                 alert(error.message)
            }
        );
    }
   
}

