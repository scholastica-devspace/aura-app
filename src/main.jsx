import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './app/store'
import { Provider } from 'react-redux'

import firebaseConfig from '../src/firebaseConfig.js'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <Provider store={store}>
    <App />
  </Provider>
)




