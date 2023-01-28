import {createContext, DetailedHTMLProps, FC, HTMLAttributes} from "react";



// console.log()

type ContextType={
    userName?:string | null
    userPassword?: string | null
}
export const LoginContext = createContext<ContextType>({});

export const LoginProvider: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> =({children})=> {

    let userName = localStorage.getItem('user')
    let userPassword = localStorage.getItem('password')


    return <LoginContext.Provider value={{userName,userPassword}}>
        {children}
    </LoginContext.Provider>
}