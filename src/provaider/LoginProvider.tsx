import {createContext, DetailedHTMLProps, FC, HTMLAttributes} from "react";



// console.log()

type ContextType={
    userName?:string | null
    userPassword?: string | null
}
export const LoginContext = createContext<ContextType>({});

export const LoginProvider: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> =({children})=> {

    let userName = window.localStorage.getItem('user')
    let userPassword = window.localStorage.getItem('password')
console.log(userName)

    return <LoginContext.Provider value={{userName,userPassword}}>
        {children}
    </LoginContext.Provider>
}