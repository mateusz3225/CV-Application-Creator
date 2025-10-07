import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './components/parent.jsx'
import File from './components/fullfiledisplay.jsx'
import App from './components/app.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
    </App>
  </StrictMode>,
)
