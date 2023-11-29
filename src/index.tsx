import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from 'error-boundary-react'

import 'css-reset-plus'
import './styles/index.scss'
import App from './App'
import { store } from '@/store'

const rootElement = document.getElementById('Root')!
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <ErrorBoundary element={<h1>Error</h1>}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
)
