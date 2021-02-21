import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import {
  CBadge,
  CRow,CCol

} from '@coreui/react'
import  {Mydate, requestOptions,videoUrl} from '../Config'

class Widgets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        videoList: []
      };
    }
    componentDidMount() {
          fetch(videoUrl, requestOptions)
           .then((response) => response.json())
           .then((data) => {this.setState({videoList:data}) })
           .catch(error => console.log("Error detected: " + error))
        }
    render() {
      // console.log(this.props)
        
 return  <> 
        <span className="h5"><strong>New Videos</strong></span> <br/><br/>
          <CRow>
              { this.state.videoList.map((video,index)=>( 
                <CCol sm="6" lg="3" key={index}>
                      <Link to="/playback" onClick={()=>this.props.getVideoHandler(video)}>
                        <div className='player-wrapper'>
                              <ReactPlayer
                                className='react-player'
                                url={[{src: video.video, type: 'video/mp4'} ]}
                                width='100%'
                                height='100%'
                                controls
                              />
                              <CBadge color="success" >New</CBadge>
                              <div><strong>{video.title}</strong></div>
                              <div className="small text-muted">
                                  <span>New</span> | {video.batch}: {Mydate(video.startDateTime)}
                              </div>
                            </div>
                      </Link>     
                      </CCol>  
              ))}
          </CRow>
     
      </>;
        }

}

export default Widgets
