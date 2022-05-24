import {auth, provider} from "../firebase";

export function signInAPI(){
    return (dispatch)=>{
        auth 
        .sighInWithPopup(provider)
        .then((payload)=>{
            console.log(payload);
        })
        .catch((error)=>(alert.message));
    };
}
