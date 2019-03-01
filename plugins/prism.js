import Vue from 'vue'

import VuePrism from 'vue-prism'

// import locale from 'prismjs/themes/prism.css'
import prismcss from 'prismjs/themes/prism-twilight.css'
// import Prism from 'prismjs';
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/themes/prism-twilight.css'
export default () => {
  Vue.use(VuePrism, { prismcss })
}
