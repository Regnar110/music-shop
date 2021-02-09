import './home.styles.scss'
import { withRouter } from 'react-router-dom'
import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import HomeLanding from '../../Components/HomeComponents/HomeLanding/HomeLanding.component'
import HomeSectionHeader from '../../Components/HomeComponents/HomeSectionHeader/HomeSectionHeader.component'
import HomeSwiper from '../../Components/HomeComponents/HomeSwiper/HomeSwiper.component'
import CustomButton from '../../Components/CustomButton/CustomButton.component'

const Home = ({history}) => {
    return(
        <div className='home'>
            <BreakFromTop breakHeight={'80px'}/>
            <HomeLanding />
            <HomeSectionHeader title={"TOP 10 News"}/>
            <HomeSwiper place='TOP10' />
            <HomeSectionHeader title={"Recommended today"}/>
            <HomeSwiper place='RECOMENDED'/>
            <HomeSectionHeader title={"Pre-orders"}/>
            <HomeSwiper place='PRE_ORDERS'/>
            <CustomButton name={'Go to the store'} onClick={() => history.push('/shop')}/>
        </div>
    )
}

export default withRouter(Home);