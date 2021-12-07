import tool from './route.tool'
import tc from './route.tc'
import ui from './route.ui'


export default {
  data: [...ui.data, ...tool.data,...tc.data]
}
