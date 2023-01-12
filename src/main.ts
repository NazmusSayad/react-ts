import getClassName from 'get-classnames'
import store from '$store'

declare global {
  var $cn: typeof getClassName
  var $store: typeof store
}

window.$cn = getClassName
window.$store = store
import './index'
