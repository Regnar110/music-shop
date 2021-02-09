import './shopitemscontainer.styles.scss'
import album1 from '../../Assets/Albums/album.jpg'
import album2 from '../../Assets/Albums/album.jpg'

import { useEffect, useState } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import ShopItem from '../ShopItem/ShopItem.component'

const ShopItemsContainer = ({ category }) => {
    const productTest = [
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
            albumTracks: [
                'Bird Set Free', 'Alive', 'One Million Bullets', 'Move Your Body', 'Unstoppable', 'Cheap Thrills',
                'Reaper', 'House on Fire', 'Footprints', 'Sweet Design', 'Broken Glass', 'Space Between'
            ]
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            Author: 'Sia',
            price: '50',
            albumPicture: album1,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
        {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album1,
        },

                {
            id: '12312312312',
            author: 'Sia',
            album: 'This is acting',
            price: '50',
            albumPicture: album2,
        },
    ]
    let { shopId } = useParams()
    if(!shopId) {
        shopId = 'All'
    }

    useEffect( () => {
        (async () => {
            const response = await fetch('http://localhost:3008/getproducts', {
                method: 'POST', 
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    shopPlace: shopId.toUpperCase()
                })
            })
            const data = await response.text()
            console.log(data)
        })();
    }, [shopId])

    return (
        <div className='shop-items-container'>
            <h2>{shopId.toUpperCase()}</h2>
            <div className='shop-items'>
                {
                    productTest.map((product, index) => <ShopItem key={index} product={product}/>)
                }
            </div>
        </div>
    )
}

export default withRouter(ShopItemsContainer)