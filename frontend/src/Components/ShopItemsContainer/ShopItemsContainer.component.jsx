import './shopitemscontainer.styles.scss'

import { withRouter, useParams } from 'react-router-dom'

const ShopItemsContainer = () => {
    let { shopId } = useParams();
    return (
        <div>{shopId}</div>
    )
}

export default withRouter(ShopItemsContainer)