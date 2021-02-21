import {combineReducers} from 'redux'
import {getTodaySession,getVideos,getUploadAssignment,getFiles} from './reducer'
// import getAnnouncement from './reducer'
// import getVideos from './reducer'

export default combineReducers({
    getTodaySession,
    // getAnnouncement,
    getVideos,
    getUploadAssignment,
    getFiles
})