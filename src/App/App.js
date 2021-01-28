import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar.component'
import MobileNavbar from '../Components/MobileNavbar/MobileNavbar.component'
import Home from '../Pages/Home/Home.component'
import Contact from '../Pages/Contact/Contact.component'
import Login from '../Pages/Login/Login.component'
import SignUp from '../Pages/SignUp/SignUp.component'
import Shop from '../Pages/Shop/Shop.component'


const App = () => {

  const windowWidth = window.innerWidth

  return (
    <div className='App'> 
    {
      windowWidth <= 768 ? 
        (
          <MobileNavbar />
        )
      :
        (
          <Navbar />
        )
    }
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/shop/' component={Shop}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
      </Switch>
    </div>
  )
}

export default App;
