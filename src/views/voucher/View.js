import React from 'react'
import axios from 'axios'; 
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTextarea,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
} from '@coreui/react'
import {requestOptions,getAllCategory, addVoucher} from '../Config'

class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         large: false,
         categoryList: []
      };
    }
     
    handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value  })
    }
    handleSet = () =>{
        this.setState({ large: !this.state.large    })
    }

    editVoucher = (event)=>{
      event.preventDefault();

      const postreq = {
          "voucherName": this.state.voucherName || this.props.voucherData.voucherName,
          "title": this.state.title || this.props.voucherData.title,
          "expiry": this.state.expiry || this.props.voucherData.expiry,
          "coupenCode": this.state.coupenCode || this.props.voucherData.coupenCode,
          "category": this.state.category || this.props.voucherData.category,
          "description": this.state.description || this.props.voucherData.description,
          "term": this.state.term || this.props.voucherData.term
      }
  const token = localStorage.getItem('token');
  axios.put(`${addVoucher}/${this.props.voucherData._id}`,postreq,{ headers: { "Authorization": `Bearer ${token}` } })
      .then(data => {
      alert("voucher has been Updated Successfully");
      window.location.reload();
      })    
      .catch(error => console.log("Error detected: " + error))


}


     componentDidMount(){
      fetch(getAllCategory, requestOptions)
     .then((response) => response.json())
     .then((data) => {this.setState({categoryList:data.categoryData})  })
     .catch(error => console.log("Error detected: " + error)) ;
  }
render() {

    const large = this.state.large;
 return  <>
    <CButton block color="success" onClick={this.handleSet.bind(this)}>View</CButton>
       <CModal show={this.state.large} onClose={() => this.handleSet(large)} size="lg">
         <CModalHeader closeButton><CModalTitle  style={{font:'poppins',color:'#CB694A'}}>Edit Voucher</CModalTitle></CModalHeader>
            <CModalBody>
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Voucher Name</CLabel>
                           <p> {this.props.voucherData.voucherName} </p> 
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                           
                            <CLabel className="font-weight-bold"> Title</CLabel>
                           <p> {this.props.voucherData.title} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                           
                            <CLabel className="font-weight-bold"> Expiry Date</CLabel>
                           <p> {this.props.voucherData.expiry} </p> 
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Coupen Code</CLabel>
                           <p> {this.props.voucherData.voucherName} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Category</CLabel>
                           <p> {this.props.voucherData.voucherName} </p> 
                            </CFormGroup>
                        </CCol>
                       
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel className="font-weight-bold"> Description</CLabel>
                           <p> {this.props.voucherData.voucherName} </p> 
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="8">
                            <CFormGroup>
                            <CLabel className="font-weight-bold">Term & Condition</CLabel>
                           <p> {this.props.voucherData.voucherName} </p> 
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
