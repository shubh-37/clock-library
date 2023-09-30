import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clock } from 'react-clock-component'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <Clock format='LL' delayTimer={1000} />
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <Clock delayTimer={1000} format='LL' />
    </div>
  </React.StrictMode>,
)
