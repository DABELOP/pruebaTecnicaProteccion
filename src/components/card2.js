import React from 'react';
import { useState, useEffect } from 'react';

function Card2(props) {

    
    const [cardInfo, setCardInfo] = useState([])


    useEffect(() => {
        const link = 'https://www.superheroapi.com/api.php/10227755335285390/' + props.id
        fetch(link)
            .then(data => data.json())
            .then(res => setCardInfo(res))
            .catch(err => console.log(err))
    }, [])  

    return (

        cardInfo == '' ? (
            <div className='cardContainer charging'>
                <p>Cargando...</p>
            </div>
        ) : (
            <div className='cardContainer'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className='imgCard' src={cardInfo.image.url} />
                        </div>
                        <div class="flip-card-back">
                            <h2 className='nombrePersonaje'>{cardInfo.name}</h2>

                            <div className='nombreCompleto'>
                                <p>Nombre completo:</p>
                                <p>{cardInfo.biography['full-name']}</p>
                            </div>

                            <p>Genero: {cardInfo.appearance.gender}</p>

                            <div className='primeraAparicion'>
                                <p>Primera aparición:</p>
                                <p>{cardInfo.biography['first-appearance']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Card2 