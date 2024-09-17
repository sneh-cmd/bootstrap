import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Formapp from './Formapp'

createRoot(document.getElementById('root')).render(
  <Formapp />
)
