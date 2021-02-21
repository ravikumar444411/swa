import Session from '../views/dashboard/Session'
import {connect} from 'react-redux'
import {getTodaySession} from '../service/actions/actions'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    getTodaySessionHandler:data=>dispatch(getTodaySession(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Session)
// export default Home;