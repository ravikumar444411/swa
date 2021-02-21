import Get_request from '../views/All_function'
import {connect} from 'react-redux'
import {getRequests} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    getRequestHandler:data=>dispatch(getRequests(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Get_request)
// export default Home;