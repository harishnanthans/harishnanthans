import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/home/Home.jsx'
import NavBar from './components/NavBar.jsx'

import "./index.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Home />
  </StrictMode>,
)
