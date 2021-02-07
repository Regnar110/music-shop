import './shopitemscontainer.styles.scss'
import album1 from '../../Assets/Albums/album.jpg'
import album2 from '../../Assets/Albums/album2.jpg'


import { withRouter } from 'react-router-dom'
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

    return (
        <div className='shop-items-container'>
            <h2>{category.toUpperCase()}</h2>
            <div className='shop-items'>
                {
                    productTest.map((product, index) => <ShopItem key={index} product={product}/>)
                }
            </div>
        </div>
    )
}

export default withRouter(ShopItemsContainer)