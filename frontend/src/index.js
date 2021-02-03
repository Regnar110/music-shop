import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import FirebaseProvider from './Firebase/firebase'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
