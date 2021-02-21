import React from 'react';
import axios from 'axios'; 
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CTextarea,
  CRow,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
} from '@coreui/react'

import {getAllCategory,requestOptions,addCategory,addVoucher} from '../Config'

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
        this.setState({  [name]: value   })
    }

    addCategory = (event)=>{
        event.preventDefault();
        const postreq = {
            'categoryName':this.state.categoryName
        }
    const token = localStorage.getItem('token');
    axios.post(addCategory,postreq,{ headers: { "Authorization": `Bearer ${token}` } })
    .then(data => {
    alert("New category has been created Successfully");
    window.location.reload();
    })    
    .catch(error => console.log("Error detected: " + error))

    }



    addVoucher = (event)=>{
        event.preventDefault();

        const postreq = {
            "voucherName": this.state.voucherName,
            "title": this.state.title,
            "expiry": this.state.expiry,
            "coupenCode": this.state.coupenCode,
            "category": this.state.category,
            "description": this.state.description,
            "term": this.state.term
        }
// console.log(postreq)
    const token = localStorage.getItem('token');
    axios.post(addVoucher,postreq,{ headers: { "Authorization": `Bearer ${token}` } })
        .then(data => {
        alert("New voucher has been created Successfully");
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
                <p style={{font:'poppins',color:'#CB694A'}}  className="h5">Add Category</p><br/>
                <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Category Name*</CLabel>
                            <CInput  name="categoryName" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup> 
                    <CFormGroup>
                        <CCol xs="12" lg="3">
                         <CButton block  shape="pill"style={{font:'poppins',background:'#CB694A',color:'white'}}  
                         onClick={this.addCategory}>Add Category</CButton>                
                        </CCol>
                    </CFormGroup>

{/* Add voucher */}

                 <p style={{font:'poppins',color:'#CB694A'}}  className="h5">Add Voucher</p><br/>
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Voucher Name*</CLabel>
                            <CInput  name="voucherName" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Title*</CLabel>
                            <CInput  name="title" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Expiry Date*</CLabel>
                            <CInput type="date" id="date-input" name="expiry" placeholder="date" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="12" lg="4">
                            <CFormGroup>
                            <CLabel > Coupen Code*</CLabel>
                            <CInput  name="coupenCode" onChange={this.handleChange} />
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
                            <CInput  name="description" onChange={this.handleChange} />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                   <CFormGroup row className="my-0">
                        <CCol xs="12" lg="8">
                            <CFormGroup>
                            <CLabel > Term & Condition</CLabel>
                            <CTextarea 
                            name="term" 
                            rows="9"
                            placeholder="Discription" 
                            onChange={this.handleChange}
                            />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>  
                  
                    <br/>
                    <CFormGroup>
                        <CCol xs="12" lg="3">
                         <CButton block  shape="pill"style={{font:'poppins',background:'#CB694A',color:'white'}}  
                         onClick={this.addVoucher}>Add Voucher</CButton>                
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