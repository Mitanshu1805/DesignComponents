import './assets/main.css'

import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <div
    style={{
      outline: '4px dashed red',
      height: '100vh',
      overflow: 'hidden'
    }}
  >
    <App />
  </div>
)
