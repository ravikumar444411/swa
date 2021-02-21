import React from 'react'
import axios from 'axios'; 
import {
  CButton,
  CInputFile,
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
import {requestOptions,getAllCategory, addVendor} from '../Config'

class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         large: false,
         categoryList:[]
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

    editVendor = (event)=>{
      event.preventDefault();

       // Create an object of formData 
       const formData = new FormData(); 
      
       formData.append("gender", this.state.gender || this.props.vendorData.gender);
       formData.append("email", this.state.email || this.props.vendorData.email);
       formData.append("name", this.state.name || this.props.vendorData.name);
       formData.append("productCode", this.state.productCode || this.props.vendorData.productCode);
       formData.append("category", this.state.category);
       formData.append("subCategory", this.state.subCategory || this.props.vendorData.subCategory);
       formData.append("otherDeails", this.state.otherDeails || this.props.vendorData.otherDeails);
       formData.append("address", this.state.address || this.props.vendorData.address);
       formData.append("phone", this.state.phone || this.props.vendorData.phone);
       formData.append("logo", this.state.logo);
       formData.append("cover", this.state.cover);
   
  
const token = localStorage.getItem('token');

axios.post(addVendor,formData,{ headers: { "Authorization": `Bearer ${token}` } })
   .then(data => {
   alert("vendor has been updated Successfully");
   window.location.reload();
   })    
   .catch(error => console.log("Error detected: " + error))


}


     componentDidMount(){
      fetch(getAllCategory, requestOptions)
     .then((response) => response.json())
     .then((data) => {this.setState({categoryList:data.categoryData}) })
     .catch(error => console.log("Error detected: " + error)) ;
  }
render() {

    const large = this.state.large;
 return  <>
    <CButton block color="warning" onClick={this.handleSet.bind(this)}>Edit</CButton>
       <CModal show={this.state.large} onClose={() => this.handleSet(large)} size="lg">
         <CModalHeader closeButton><CModalTitle  style={{font:'poppins',color:'#CB694A'}}>Edit Vendor</CModalTitle></CModalHeader>
         <CCardBody>
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Name*</CLabel>
                            <CInput defaultValue={this.props.vendorData.name}  name="name" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Email*</CLabel>
                            <CInput defaultValue={this.props.vendorData.email}  name="email" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Product Code*</CLabel>
                            <CInput defaultValue={this.props.vendorData.productCode} name="productCode" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Gender*</CLabel>
                            <CSelect defaultValue={this.props.vendorData.gender} name="gender" onChange={this.handleChange} >
                                <option value={this.props.vendorData.gender} >{this.props.vendorData.gender} </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">other</option>
                            </CSelect>
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
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Sub Category</CLabel>
                            <CInput defaultValue={this.props.vendorData.subCategory} name="subCategory" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Other Details</CLabel>
                            <CInput defaultValue={this.props.vendorData.otherDeails} name="otherDeails" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Phone Number*</CLabel>
                            <CInput defaultValue={this.props.vendorData.phone} name="phone" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="8">
                            <CFormGroup>
                            <CLabel > Address</CLabel>
                            <CTextarea 
                            name="address" 
                            rows="9"
                            defaultValue={this.props.vendorData.address}
                            placeholder="Discription" 
                            onChange={this.handleChange}
                            />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>   
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup >
                                <CLabel htmlFor="country">Upload Document</CLabel>
                                <CCol xs="12" md="12">
                                    <CInputFile custom onChange={(e)=> this.setState({logo: e.target.files[0]})  }/>
                                    <CLabel htmlFor="custom-file-input" variant="custom-file"> upload Document</CLabel>
                                </CCol>
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup >
                                <CLabel htmlFor="country">Upload Document</CLabel>
                                <CCol xs="12" md="12">
                                    <CInputFile custom  onChange={(e)=> this.setState({cover: e.target.files[0]})  }/>
                                    <CLabel htmlFor="custom-file-input" variant="custom-file"> upload Document</CLabel>
                                </CCol>
                        </CFormGroup>
                        </CCol>
                    </CFormGroup>  

                     
                    <br/>
                    <CFormGroup>
                        <CCol xs="12" lg="3">
                         <CButton block  shape="pill"style={{font:'poppins',background:'#CB694A',color:'white'}}  
                         onClick={this.editVendor}>Update vendor</CButton>                
                        </CCol>
                    </CFormGroup>
            </CCardBody>
           
 </CModal>

          </>;
      }

}

export default Edit
