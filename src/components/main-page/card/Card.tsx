import React, {useEffect, useState} from 'react';
import s from './Card.module.css'
import {useParams} from "react-router-dom";
import {PhotosType} from "../../../provaider/ApiProvider";
import axios from "axios";


export const Card = () => {
    const [card, setCard] = useState<PhotosType>()
    const {id} = useParams();
    useEffect(() => {
        if (id) {
            let url = `https://picsum.photos/id/${id}/info`;
            axios.get(url)
                .then(function (response) {
                    setCard(response.data);
                })
                .catch((error) => console.log(error));
        }

    }, [])
    return (
        <div className={s.cardPosition}>
            {/*<Header/>*/}
            <section className={s.cardWrapper}>
                <img src={card?.download_url} alt={`painting by the artist ${card?.author}`} className={s.imgCard}/>

                <div className={s.details}>
                    <h4 className={s.detailsTitle}>Details</h4>
                    <ul className={s.infoPicture}>
                        <li><span>Resolution</span> <p>{`${card?.width} x ${card?.height} `}</p></li>
                        <li><span>Author </span><p>{card?.author}</p></li>
                        <li><span>ID</span> <p>{card?.id}</p></li>

                    </ul>
                </div>
            </section>
            {/*<Footer/>*/}
        </div>
    );
};

