import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IPGeolocationProvider } from './context/IPGeolocationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IPGeolocationProvider>
      <App />
    </IPGeolocationProvider>
  </StrictMode>,
)
