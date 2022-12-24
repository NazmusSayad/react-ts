import { configureStore } from '@reduxjs/toolkit'
import { authReducers } from './slice/Auth'

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
})

export default store
window.$store = store
declare global {
  var $store: typeof store
}
