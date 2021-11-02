import {createContext ,useReducer,useEffect} from 'react'
import Reducer from './Reducer'
const INTIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")),
    isFetching:false,
    error:false,
}

export const Context = createContext(INTIAL_STATE);

export const ContextProvider = ({children})=>{
   const [state,dispatch] = useReducer(Reducer,INTIAL_STATE);
    useEffect(()=>{
       localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])
   return (
       <Context.Provider value={{
           uesr:state.user,
           isFetching:state.isFetching,
           error:state.error,
           dispatch

       }}>
           {children}
       </Context.Provider>
   )

}





// dispatch function : 