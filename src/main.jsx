import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
//import Footer from './Footer.jsx'
import MainContent from './MainContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainContent/>
  </React.StrictMode>,
)
