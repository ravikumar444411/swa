// import Side_session from '../views/calender/Side_session'
import {connect} from 'react-redux'
import {getTodaySession,getAnnouncement} from '../service/actions/actions'

const mapStateToProps=state=>({
  data:state.getTodaySession
})
const mapDispatchToProps=dispatch=>({
    getAnnouncementHandler:data=>dispatch(getAnnouncement(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Side_session)
// export default Home;