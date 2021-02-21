import React from 'react';
import axios from 'axios'; 
// import {connect} from 'react-redux'
// import {getFiles} from '../../service/actions/actions'
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
  CInputFile,
  CTextarea,
  CRow,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
} from '@coreui/react'
// import Accept from './Accept'
import {requestOptions,getAllCategory, addVendor} from '../Config'

class Upload extends React.Component {
    constructor() {
        super();
        this.state = {
          files: [],
          categoryList:[]
        };
      }

    handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSet = () =>{
        this.setState({  large: !this.state.large  })
    }
    addVendor = (event)=>{
        event.preventDefault();

        // Create an object of formData 
        const formData = new FormData(); 
      
            formData.append("gender", this.state.gender);
            formData.append("email", this.state.email);
            formData.append("name", this.state.name);
            formData.append("productCode", this.state.productCode);
            formData.append("category", this.state.category);
            formData.append("subCategory", this.state.subCategory);
            formData.append("otherDeails", this.state.otherDeails);
            formData.append("address", this.state.address);
            formData.append("phone", this.state.phone);
            formData.append("logo", this.state.logo);
            formData.append("cover", this.state.cover);
        
       
    const token = localStorage.getItem('token');

    axios.post(addVendor,formData)
        .then(data => {
        alert("New vendor has been added Successfully");
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

return  <>     
         <CRow>
            <CCol xs="12" sm="12">
             <CCard>
                <CCardBody>
                 <p style={{font:'poppins',color:'#CB694A'}}  className="h5">Add new vendor</p><br/>
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Name*</CLabel>
                            <CInput  name="name" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Email*</CLabel>
                            <CInput  name="email" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Product Code*</CLabel>
                            <CInput  name="productCode" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Gender*</CLabel>
                            <CSelect  name="batches" onChange={this.handleChange} >
                                <option value="null">select gender </option>
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
                            <CInput  name="subCategory" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Other Details</CLabel>
                            <CInput  name="otherDeails" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Phone Number*</CLabel>
                            <CInput  name="phone" onChange={this.handleChange} />
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
                         onClick={this.addVendor}>Add vendor</CButton>                
                        </CCol>
                    </CFormGroup>
            </CCardBody>
        </CCard>
        </CCol>
    </CRow>
         

          </>;
      }

}

export default Upload



// const mapStateToProps=state=>({
//     fileData:state.getFiles[0]
//   })
//   const mapDispatchToProps=dispatch=>({
//     getFileHandler:data=>dispatch(getFiles(data))
  
//   })
//   export default connect(mapStateToProps,mapDispatchToProps)(Upload)