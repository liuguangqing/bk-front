import Vue from 'vue'

import VuePrism from 'vue-prism'

// import prismcss from 'prismjs/themes/prism.css'
// import prismcss from 'prismjs/themes/prism-twilight.css'
// import prismcss from 'prismjs/themes/prism-coy.css'       // 
import prismcss from 'prismjs/themes/prism-tomorrow.css'  //
// import prismcss from 'prismjs';
// import prismcss from 'prismjs/themes/prism-dark.css'
// import prismcss from 'prismjs/themes/prism-twilight.css'  // 
// import prismcss from 'prismjs/themes/prism-okaidia.css'
export default () => {
  Vue.use(VuePrism, { prismcss })
}
