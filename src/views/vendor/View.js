import React from 'react'
import {
  CButton,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CLabel
} from '@coreui/react'

class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         large: false,

      };
    }
     
    handleSet = () =>{
        this.setState({ large: !this.state.large    })
    }


render() {

    const large = this.state.large;
 return  <>
    <CButton block color="success" onClick={this.handleSet.bind(this)}>View</CButton>
       <CModal show={this.state.large} onClose={() => this.handleSet(large)} size="lg">
         <CModalHeader closeButton><CModalTitle  style={{font:'poppins',color:'#CB694A'}}>Edit vendor</CModalTitle></CModalHeader>
            <CModalBody>
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> vendor Name</CLabel>
                           <p> {this.props.vendorData.name} </p> 
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                           
                            <CLabel className="font-weight-bold"> Gender</CLabel>
                           <p> {this.props.vendorData.gender} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                           
                            <CLabel className="font-weight-bold"> Email</CLabel>
                           <p> {this.props.vendorData.email} </p> 
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Product Code</CLabel>
                           <p> {this.props.vendorData.productCode} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Category</CLabel>
                           <p> {this.props.vendorData.category} </p> 
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Sub Category</CLabel>
                           <p> {this.props.vendorData.subCategory} </p> 
                            </CFormGroup>
                        </CCol>
                       
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Other Detail</CLabel>
                           <p> {this.props.vendorData.otherDeails} </p> 
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Phone</CLabel>
                           <p> {this.props.vendorData.phone} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="8">
                            <CFormGroup>
                            <CLabel className="font-weight-bold">Address</CLabel>
                           <p> {this.props.vendorData.address} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                  
                    <br/>
                    <CFormGroup row>
                        <CCol xs="12" lg="3">
                        <CButton block color="secondary" shape="pill" onClick={this.handleSet.bind(this)}>Exit</CButton>               
                        </CCol>
                    </CFormGroup>
                 </CModalBody>
           
 </CModal>

          </>;
      }

}

export default View
