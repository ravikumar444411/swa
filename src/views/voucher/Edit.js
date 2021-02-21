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

class Edit extends React.Component {
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
    <CButton block color="warning" onClick={this.handleSet.bind(this)}>Edit</CButton>
       <CModal show={this.state.large} onClose={() => this.handleSet(large)} size="lg">
         <CModalHeader closeButton><CModalTitle  style={{font:'poppins',color:'#CB694A'}}>Edit Voucher</CModalTitle></CModalHeader>
            <CModalBody>
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Voucher Name*</CLabel>
                            <CInput defaultValue={this.props.voucherData.voucherName}  name="voucherName" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Title*</CLabel>
                            <CInput defaultValue={this.props.voucherData.title}  name="title" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Expiry Date*</CLabel>
                            <CInput type="date" defaultValue={this.props.voucherData.expiry} name="expiry"  placeholder="date" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Coupen Code*</CLabel>
                            <CInput defaultValue={this.props.voucherData.coupenCode}  name="coupenCode" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Category*</CLabel>
                            <CSelect  name="category" onChange={this.handleChange} >
                                {this.state.categoryList.map((list,index) => (
                                    <option value={list.categoryName} key={index} >{list.categoryName} </option>
                                    
                                    ))}
                            </CSelect>
                            </CFormGroup>
                        </CCol>
                       
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Description</CLabel>
                            <CInput defaultValue={this.props.voucherData.description}  name="description" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="8">
                            <CFormGroup>
                            <CLabel > Term & Condition</CLabel>
                            <CTextarea 
                            name="term" 
                            defaultValue={this.props.voucherData.term}
                            rows="9"
                            placeholder="Discription" 
                            onChange={this.handleChange}
                            />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                  
                    <br/>
                    <CFormGroup row>
                        <CCol xs="12" lg="3" className="text-center" >
                         <CButton block shape="pill" style={{font:'poppins',background:'#CB694A',color:'white'}}  
                         onClick={this.editVoucher}>Add Voucher</CButton>                
                        </CCol>
                        <CCol xs="12" lg="3">
                        <CButton block color="secondary" shape="pill" onClick={this.handleSet.bind(this)}>Cancel</CButton>               
                        </CCol>
                    </CFormGroup>
                 </CModalBody>
           
 </CModal>

          </>;
      }

}

export default Edit
