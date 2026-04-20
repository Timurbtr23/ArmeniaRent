import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export async function prerender() {
  const html = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  return { html }
}
