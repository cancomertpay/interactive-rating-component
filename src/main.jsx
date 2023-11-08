import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SuccessContextProvider from './store/SuccessContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SuccessContextProvider>
    <App />
  </SuccessContextProvider>,
)
