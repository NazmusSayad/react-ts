import { createSlice } from 'react-rtk'

const initialState = {
  jwt: null,
}

const sessionState = {
  ...initialState,
  jwt: localStorage.getItem('jwt-token'),
}

export default createSlice(
  'auth',
  { ...sessionState },
  {
    login(state, { payload }) {
      state.jwt = payload
    },
    logout(state) {
      Object.assign(state, initialState)
    },
  }
)
