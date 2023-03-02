import React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Config/Router/Router'

import './index.css'
const container = document.getElementById('root') as Element
const Root = createRoot(container)

Root.render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
)
