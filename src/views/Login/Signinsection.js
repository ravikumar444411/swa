import React, { useState } from 'react'
import {
  CButton,
  CCardBody,
  CForm,
  CInputGroup,
  CRow,
  CCol,
  CInput
} from '@coreui/react'

class Signinsection extends React.Component {
  handleChange =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    })
}


handleSignin = (event)=>{
    event.preventDefault();
    console.log(this.state);

console.log(JSON.stringify(this.state));



  fetch('http://127.0.0.1:8000/api/v1/auth/rest-auth/registration/teacher', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'cors',
    body: JSON.stringify(this.state),
}).then(response => response.text())
    .then(data => console.log(data))    
    .catch(error => console.log("Error detected: " + error))
}
render() { 
        return  <>
              <CCardBody>
                  <CForm>
                            
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="Email " name="email" style={{border:'2px solid #CB694A'}} onChange={this.handleChange}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="password" placeholder="password" name="password1" style={{border:'2px solid #CB694A'}} onChange={this.handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInput type="password" placeholder="confirm Password"  name="password2" style={{border:'2px solid #CB694A'}} onChange={this.handleChange} />
                    </CInputGroup>
                    
                    <CRow >
                      <CCol className="col-2 col-sm-3 col-md-2"></CCol>
                      <CCol className="col-8 col-sm-6 col-md-8">
                          <CButton  size="lg" block shape="pill" style={{font:'poppins',background:'#CB694A',color:'white'}} onClick={this.handleSignin} >
                          <strong>Register</strong></CButton>

                      </CCol>
                      <CCol className="col-2 col-sm-3 col-md-2"></CCol>
                  </CRow>
                  </CForm>
                </CCardBody>
      
          </>;
      }

}

export default Signinsection
