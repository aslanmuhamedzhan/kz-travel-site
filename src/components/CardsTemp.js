import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    const theme = useSelector(state => state)
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setItems(json.slice(0, 4)))
    })
    return (
        <div className={`cards ${theme === 'light' ? 'light' : 'dark'}`}>
            <h1>Check out these EPIC places</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        {items.map(item => (
                            <CardItem
                            src={item.url}
                            text={item.title}
                            label={item.id}
                            path='/'
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards 
