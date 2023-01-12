import store from '$store'
import getClassName from 'get-classnames'

declare global {
  var $store: typeof store
  var $cn: typeof getClassName
}

window.$store = store
window.$cn = getClassName
import './index'
