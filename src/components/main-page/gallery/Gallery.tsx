import React from 'react';
import {APIContext} from "../../../provaider/ApiProvaider";



export const Gallery = () => {
const {data} =React.useContext(APIContext)
    return (

            // <div>{data}</div>
         <div>не вытянула</div>

    );
};
