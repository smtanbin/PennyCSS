import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

// Style
import '../src/Assets/LunaBlack/spectre.css'
import '../src/Assets/LunaBlack/spectre-exp.css'
// import '../src/Assets/LunaBlack/spectre-icons.css'


// Component
import Template from './Components/Template/Template'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
  {/* // Online CSS */}
    {/* <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" /> */}
    {/* <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" /> */}
    <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
  <Template/>
  </React.StrictMode>,
)
