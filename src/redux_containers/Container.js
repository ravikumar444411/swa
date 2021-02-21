import {connect} from 'react-redux'
import {getVideos,getTodaySession,getUploadAssignment} from '../service/actions/actions'

import Videos from '../views/videos/Videos'
import Widgets from '../views/dashboard/Widgets'
import Side_session from '../views/calender/Side_session'
import Preread from '../views/dashboard/Preread'
import Assignment from '../views/assignments/Assignment'
import Upload from '../views/assignments/Assignment'



// dashboard video component
const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    getVideoHandler:data=>dispatch(getVideos(data))

}) 
export var Dashboard_video =  connect(mapStateToProps,mapDispatchToProps)(Widgets);





/* dashboard Prerread component  */
const get_preread=state=>({
    preread:state
})
export var All_preread =  connect(get_preread)(Preread);


/*  video component   */
const get_video=state=>({
    // data:state.cardItems
})
const post_video=dispatch=>({
    getVideoHandler:data=>dispatch(getVideos(data))

})
export var video =  connect(get_video,post_video)(Videos);



//  Calender side announcement Component  
const get_sideSession=state=>({
    data:state.cardItems
})
const post_sideSession=dispatch=>({
    getTodaySessionHandler:data=>dispatch(getTodaySession(data))

})
export var Calender_announcement = connect(get_sideSession,post_sideSession)(Side_session)



/*  Upload assginment Component   */
const get_upload=state=>({
    assignlist:state.getUploadAssignment
})
const post_upload=dispatch=>({
    getUploadAssignmentHandler:data=>dispatch(getUploadAssignment(data))

})
export var Upload_assignment = connect(get_upload,post_upload)(Assignment)

/*  Upload assginment Component   */
// const get_upload=state=>({
//     assignlist:state.getUploadAssignment
// })
// const post_upload=dispatch=>({
//     getUploadAssignmentHandler:data=>dispatch(getUploadAssignment(data))

// })
export var Submit_assignment = connect(get_upload,post_upload)(Upload)

