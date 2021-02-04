import './App.scss';
import { useContext, useEffect, useRef } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { FirebaseContext, createGoogleUserObject } from '../Firebase/firebase'
import setCurrentUser from '../redux/user/user.actions'
import Navbar from '../Components/Navbar/Navbar.component'
import MobileNavbar from '../Components/MobileNavbar/MobileNavbar.component'
import Home from '../Pages/Home/Home.component'
import Contact from '../Pages/Contact/Contact.component'
import Login from '../Pages/Login/Login.component'
import SignUp from '../Pages/SignUp/SignUp.component'
import Shop from '../Pages/Shop/Shop.component'
import Footer from '../Components/Footer/Footer.component'


const App = ({ currentUser, setCurrentUser }) => {

  const windowWidth = window.innerWidth
  const firebase = useContext(FirebaseContext)
  let unsubscribeFromAuth = useRef(null)
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'))
    if(userStorage === null) {
        unsubscribeFromAuth.current = firebase.auth().onAuthStateChanged( async userAuth => {
        if(userAuth) {
          const userObject = await createGoogleUserObject(userAuth)
          console.log(userObject)
          setCurrentUser(userObject)
        } else {
          setCurrentUser(userAuth)
        }
      })
    } else {
      setCurrentUser(userStorage)
    }

    return () => {
      unsubscribeFromAuth.current()
    }
  }, [unsubscribeFromAuth, firebase, setCurrentUser])

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
        <Route exact path='/login' render={
          () => currentUser ? (<Redirect to='/'/>) : (<Login/>)
        }/>
        <Route exact path='/signup' render={
          () => currentUser ? (<Redirect to='/'/>) : (<SignUp />)
        }/>
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
