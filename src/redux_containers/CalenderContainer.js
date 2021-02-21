import Calender from '../views/calender/Calender'
import {connect} from 'react-redux'
import {getTodaySession,getAnnouncement} from '../service/actions/actions'

const mapStateToProps=state=>({
  data:state.getTodaySession
})
const mapDispatchToProps=dispatch=>({
    getAnnouncementHandler:data=>dispatch(getAnnouncement(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Calender)
// export default Home;