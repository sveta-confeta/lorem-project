import {createContext, DetailedHTMLProps, FC, HTMLAttributes} from "react";



// console.log()

type ContextType={
    userName?:string | null
    userPassword?: string | null
}
export const LoginContext = createContext<ContextType>({});

export const LoginProvaider: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> =({children})=> {
    // const [data, setData] = useState([]);
    let userName = localStorage.getItem('user')
    let userPassword = localStorage.getItem('password')
    console.log(userName)

    return <LoginContext.Provider value={{userName,userPassword}}>
        {children}
    </LoginContext.Provider>
}