import Preread from '../views/dashboard/Preread'
import {connect} from 'react-redux'
import {getTodaySession} from '../service/actions/actions'

const mapStateToProps=state=>({
  data:state.getTodaySession
})
const mapDispatchToProps=dispatch=>({
    getTodaySessionHandler:data=>dispatch(getTodaySession(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Preread)
// export default Home;