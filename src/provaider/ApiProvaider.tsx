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
type ContextType = {
    data?: PhotosType[]
}
export const APIContext = createContext<ContextType>({data: []});


export const GetApiProvaider: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({children}) => {

    const [data, setData] = useState<PhotosType[]>([]);
    const [numPage, setNumPage] = useState(5);

    const numberPage = Math.floor(Math.random() * (8 - 1 + 1)) + 1


    useEffect(() => {
        return setNumPage(numberPage);
    }, [numPage]);


    console.log(numPage)


    useEffect(() => {
        let url = `https://picsum.photos/v2/list?page=${numPage}&limit=12`;
        axios.get(url)
            .then(function (response) {
                setData(response.data);
            })
            .catch((error) => console.log(error));
    }, [data]);


    return <APIContext.Provider value={{data}}>
        {children}
    </APIContext.Provider>
}

