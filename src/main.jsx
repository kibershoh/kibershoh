import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageProvider from './context/LanguageProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageProvider>
<div className=' bg-white dark:bg-black'>
  <App/>
</div>
  </LanguageProvider>
)
