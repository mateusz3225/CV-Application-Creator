import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './components/parent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex'>
      <div className='flexitem'>
      <Parent first='name' second='email' third='tel'/>
      </div>
      <div className='flexitem'>
      <Parent first='school name' second='title of study' third='date of study'/>
      </div>
      <div className='flexitem'>
      <Parent first='company Name' second='position title' third='main responsibilities'/>
      </div>
    </div>
  </StrictMode>,
)
