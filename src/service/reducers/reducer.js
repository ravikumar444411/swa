import { ANNOUNCEMENT_REQUEST,TODAY_REQUEST,VIDEOS_REQUEST,ASSIGNMENT_REQUEST,
    FILE_REQUEST
} from '../constants'
const initialState = {
    announcementData: []
}
// export default function getAnnouncement(state = [], action) {
//     switch (action.type) {
//         case ANNOUNCEMENT_REQUEST:
//             // console.warn("reducer",action)
//             return  action.data

//         default:
//             return state
//     }


// }
var todayData = null;
export function getTodaySession(state = [], action) {
    switch (action.type) {
        case TODAY_REQUEST:
            // console.warn("reducer",action)
            return action.data
             
        default:
            return state
    }


} 

var videoData = null;
export  function getVideos(state = [], action) {
    switch (action.type) {
        case VIDEOS_REQUEST:
            // console.warn("reducer",action)
            return action.data
             
        default:
            return state
    }


}
export  function getUploadAssignment(state = [], action) {
    switch (action.type) {
        case ASSIGNMENT_REQUEST:
            // console.warn("reducer",action)
            return action.data
             
        default:
            return state
    }


}
export  function getFiles(state = [], action) {
    switch (action.type) {
        case FILE_REQUEST:
            // console.warn("reducer",action)
            return action.data
             
        default:
            return state
    }


}

