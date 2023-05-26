import React from 'react';
import { useState, useEffect } from 'react';

function Card(props) {

    const [cardShow, setCardShow] = useState([props.show])
    const [cardInfo, setCardInfo] = useState([])


    useEffect(() => {
        const link = 'https://www.superheroapi.com/api.php/10227755335285390/' + props.id
        fetch(link)
            .then(data => data.json())
            .then(res => setCardInfo(res))
            .catch(err => console.log(err))
    }, [])


    let showDetail = () => {
        cardShow[0] == 'detail' ? setCardShow(['img']) : setCardShow(['detail'])
    }

    return (

        cardInfo == '' ? (
            <div className='cardContainer charging' onClick={showDetail}>
                <p>Cargando...</p>
            </div>
        ) : (

            cardShow[0] == 'img' ? (
                <div className='cardContainer' onClick={showDetail}>
                    <img className='imgCard' src={cardInfo.image.url}></img>
                </div>

            ) : (

                <div className='cardContainer details' onClick={showDetail}>
                    <h2 className='nombrePersonaje'>{cardInfo.name}</h2>

                    <div className='nombreCompleto'>
                        <p>Nombre completo:</p>
                        <p>{cardInfo.biography['full-name']}</p>
                    </div>

                    <p>Genero: {cardInfo.appearance.gender}</p>

                    <div className='primeraAparicion'>
                        <p>first-appearance:</p>
                        <p>{cardInfo.biography['first-appearance']}</p>
                    </div>

                </div>

            )

        )
    )
}

export default Card 