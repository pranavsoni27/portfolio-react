import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Initialize Shery if available
window.addEventListener('load', () => {
  if (typeof Shery !== 'undefined' && Shery.mouseFollower) {
    Shery.mouseFollower()
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
