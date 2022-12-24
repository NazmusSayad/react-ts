import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from 'error-boundary-react'
// import store from './store'
import store from '$store'

import className from 'classnames'
window.$cn = className
declare global {
  var $cn: typeof className
}

import 'css-reset-plus'
import './styles/index.scss'
import App from './App'

const rootElement = document.getElementById('Root')
const root = createRoot(rootElement as any)

root.render(
  <Provider store={store}>
    <ErrorBoundary element={<h1>Error</h1>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>
)
