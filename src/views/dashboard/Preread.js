import React from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs
} from '@coreui/react'
import Playback from './Playback'
import {Mytime,Mydate} from '../Config'

class Preread extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    active:1
  };
  }


  render(){
    console.log(this.props)
 
  return <CRow >
        
          <CCol xs="12" md="12" className="mb-4">
            <CCard style={{height:'720px'}}>
              <CCardBody>
                <p className="h2">{this.props.data.batch}</p>
              on {Mydate(this.props.data.startDateTime)},  {Mytime(this.props.data.startDateTime)} to {Mytime(this.props.data.endDateTime)}
                <br/> <br/> 
                <CTabs>
              <CNav variant="tabs">
                <CNavItem className="p-2"><CNavLink> Article 1</CNavLink> </CNavItem>
                <CNavItem className="p-2" ><CNavLink> Video</CNavLink></CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                <p>{this.props.data.description}</p>
                </CTabPane>
                <CTabPane>
                <CRow>
                  <CCol xs="8"><Playback/></CCol>
                  <CCol xs="4">
                  <p className="h2">{this.props.data.batch}</p>
                  <p>{this.props.data.description}</p>
                </CCol>
                </CRow>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  }
}

export default Preread
