import {
    createContext,
    DetailedHTMLProps,
    FC, HTMLAttributes,

    useEffect,
    useState
} from "react";
import axios from "axios";

export type PhotosType = {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string

}
type ContextType={
    data?:PhotosType[]
}
export const APIContext = createContext<ContextType>({data:[]});

export const GetApiProvaider: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> =({children})=>{
    const [data, setData] = useState<PhotosType[]>([]);
    useEffect(() => {
        let url = "https://picsum.photos/v2/list?page=1&limit=12";
        axios.get(url)
            .then(function (response) {
                setData(response.data);

                console.log(response.data);
            })
            .catch((error) => console.log(error));
    }, []);
return <APIContext.Provider value={{data}}>
    {children}
</APIContext.Provider>
}
