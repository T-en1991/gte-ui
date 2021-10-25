import tool from './route.tool'
import ui from './route.ui'


export default {
  data: [...ui.data, ...tool.data]
}
