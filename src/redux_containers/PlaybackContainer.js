import Playback from '../views/videos/Playback'
import {connect} from 'react-redux'
import {getVideos} from '../service/actions/actions'

const mapStateToProps=state=>({
    playback:state.getVideos
})
const mapDispatchToProps=dispatch=>({
    getVideoHandler:data=>dispatch(getVideos(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Playback)
// export default Home;