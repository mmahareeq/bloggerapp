export const LoginStart = (userCredentials)=>({
   type:"LOGIN_START"
})
export const LoginSuccess = (user)=>({
    type:"LOGIN_SUCCESS",
    payload: user,
 })
 export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE"
 })

 // an action object is an object that describes how to update the state . type : string 