import {ANNOUNCEMENT_REQUEST,TODAY_REQUEST,VIDEOS_REQUEST,ASSIGNMENT_REQUEST,
    FILE_REQUEST
} from '../constants'
// export const getSession =(data)=>{
//     console.warn("action",data)
//     return {
//         type:UPCOMMING_SESSION,
//         data:data
//     }
// }
export const getTodaySession =(data)=>{
    // console.warn("action",data)
    return {
        type:TODAY_REQUEST,  
        data
    }
}
export const getAnnouncement =(data)=>{
    // console.warn("action",data)
    return {
        type:ANNOUNCEMENT_REQUEST,
        data
    }
}
export const getVideos =(data)=>{
    // console.warn("action",data)
    return {
        type:VIDEOS_REQUEST,
        data
    }
}


export const getUploadAssignment =(data)=>{
    // console.warn("action",data)
    return {
        type:ASSIGNMENT_REQUEST,
        data
    }
}
export const getFiles =(data)=>{
    // console.warn("action",data)
    return {
        type:FILE_REQUEST,
        data
    }
}
