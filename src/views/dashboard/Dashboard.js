import React from 'react'
import {
  CCard,
  CCardBody
} from '@coreui/react';
import SessionContainer from '../../redux_containers/SessionContainer'
import VideoContainer from '../../redux_containers/VideoContainer'
import {announcementUrl,requestOptions} from '../Config'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcementList: []
    };
  }

  componentDidMount() {
     fetch(announcementUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {this.setState({announcementList:data})  })
      .catch(error => console.log("Error detected: " + error))
  }

  render() {

    return <div className="row">
      <div className="col-12 col-md-9 ">
      <SessionContainer />
      <VideoContainer/>
      </div>
      <div className="col-12 col-md-3">
                <CCard style={{minHeight:'450px'}}>
                <CCardBody>
                  <p className="h5 font-weight-bolder">Announcements</p><hr height="5px"/>
                  {this.state.announcementList.map((list,index) => (
                          <div className="border-bottom" key={index}>
                          <strong >{list.title}</strong>
                          <p>{list.body}</p>
                          {/* <p>{list.description.substring(0,30)}...</p> */}
                        </div>
                      ))}
                </CCardBody>
              </CCard>
      </div>
    </div>
  }
}

export default Dashboard
