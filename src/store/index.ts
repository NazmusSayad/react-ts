import { createStore } from 'react-rtk'
import Auth from '$slice/Auth'

const [store, useStore] = createStore(Auth)

export { useStore }
export default store
