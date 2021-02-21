import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
 
  CCardHeader,
  CCol,

  CRow 
} from '@coreui/react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  
 
  render() {
      const data = this.props.previewData;
      console.log(data);

    return   <CCard>
      
      <CCardBody>
        <p className="h4 font-weight-bolder"><strong>{data.title}</strong></p>
        <div className="bd-example">
            <p>From Gainiit</p>
            <p className="text-muted">{data.dateTime}</p>
          <dl className="row">
            <dt className="col-sm-2"></dt>
            <dd className="col-sm-10">{data.body}</dd>
          </dl>
          <dl className="row">
           
            <dd className="col-sm-10">
                
            <CRow className="align-items-center">
                    <CCol col="8" sm="8" md="8" lg="5"  className="mb-3 mb-xl-0">
                      <CButton block color="info">Download Assignment </CButton>
                  </CCol>
                  <CCol col="4" sm="4" md="4" lg="3"  className="mb-3 mb-xl-0">
                     <CButton block variant="outline" color="info">View Assignment</CButton>
                 </CCol>
                  <CCol col="0" sm="0" md="0" lg="4"  className="mb-3 mb-xl-0">
                   
                 </CCol>
                </CRow>
            </dd>
          </dl>
          <dl className="row">
          
            <dd className="col-sm-10">{data.body}</dd>
          </dl>
          <dl className="row">
           
            <dd className="col-sm-10">
                
            <CRow className="align-items-center">
                    <CCol col="8" sm="8" md="8" lg="3"  className="mb-3 mb-xl-0">
                      <CButton block variant="outline" color="success">Assign to facility </CButton>
                  </CCol>
                 
                </CRow>
            </dd>
          </dl>
    
    
        </div>
      </CCardBody>
    </CCard>
  
  }
}

export default Preview
