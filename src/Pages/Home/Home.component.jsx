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
            <HomeSwiper />
            <HomeSectionHeader title={"Recommended today"}/>
            <HomeSwiper />
            <HomeSectionHeader title={"Pre-orders"}/>
            <HomeSwiper />
            <HomeSectionHeader title={"Categories"}/>
            <HomeSwiper />
            <CustomButton name={'Go to the store'} onClick={() => history.push('/shop')}/>
        </div>
    )
}

export default withRouter(Home);