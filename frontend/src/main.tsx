import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globals.ts'
import { BrowserRouter } from 'react-router-dom'
import Provider from './Context/Provider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider >
      <GlobalStyle />
      <App />
    </Provider >

  </BrowserRouter>
)
