import { createContext } from 'react' //https://medium.com/@joeponzio/the-right-way-to-add-firebase-to-your-react-project-using-react-hooks-a32db20bf1a0
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRRWJro-FYa4Chnd8bp4mh8AidMEveES0",
    authDomain: "musicshopdb.firebaseapp.com",
    projectId: "musicshopdb",
    storageBucket: "musicshopdb.appspot.com",
    messagingSenderId: "113166728737",
    appId: "1:113166728737:web:8c7046cc30c952441e6d60"
  };


    export const createGoogleUserObject = ({displayName, email}) => {
      console.log('kestem w funkcji')
      const userObject = {
        displayName,
        email
    }
    return userObject;
    }

    const FirebaseContext = createContext(null)
    export { FirebaseContext }

    const firebase = ({ children }) => {
      if (!app.apps.length) {
        app.initializeApp(firebaseConfig)
      }
      return (
        <FirebaseContext.Provider value={ app }>
          { children }
        </FirebaseContext.Provider>
      )
    }

    export default firebase;