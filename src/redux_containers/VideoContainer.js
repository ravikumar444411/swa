// import Videos from '../views/videos/Videos'
import Widgets from '../views/dashboard/Widgets'

import {connect} from 'react-redux'
import {getVideos} from '../service/actions/actions'

const mapStateToProps=state=>({
    playback:state.getVideos
})
const mapDispatchToProps=dispatch=>({
    getVideoHandler:data=>dispatch(getVideos(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Widgets)

