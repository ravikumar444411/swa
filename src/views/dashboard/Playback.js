import React from 'react'
import {
  CBadge,
 
} from '@coreui/react'


const Playback = () => {
  return (
    <>
    <a href="http://google.com" className="text-body h5">  {'<'} Back</a>
    <video className="ml-0" width="100%"  controls ><source src="./Videos/video1.mp4" type="video/mp4"/></video>
    <br/><br/>
      <span className="h5"><strong>More Videos</strong></span>
    <br/><br/>
   
     </>
  )
}

export default Playback
