import React  from 'react'
import axios from 'axios'; 
import {
  CButton,
  CCardBody,
  CForm,
  CInputGroup,
  CRow,
  CCol,
  CInput,
  CLabel
} from '@coreui/react'
import {loginurl, loginUrl} from '../Config'

const TheLayout = React.lazy(() => import('../../containers/TheLayout'));

class Loginsection extends React.Component {
    state ={
        data:null
    }
    handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }



    handleLogin = (event)=>{
        event.preventDefault();

        const loginRequest = {
          "username": this.state.username,
          "password": this.state.password
      }

axios.post(loginUrl, loginRequest)
    .then(data => {
      localStorage.setItem('token', data.data.token);
      // console.log(data.data.token)
      window.location.reload();
    })    
    .catch(error => console.log("Error detected: " + error))

    }
render() {
  return  <>
    <CCardBody>
        <CForm>          
          <CInputGroup className="mb-3">
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInput type="text" placeholder="Email"  name="username" style={{border:'2px solid #CB694A'}} onChange={this.handleChange}  />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInput type="password" placeholder="Password"  name="password" style={{border:'2px solid #CB694A'}}  onChange={this.handleChange}  />
          </CInputGroup>
          <CRow >
              <CCol className="col-2 col-sm-3 col-md-2"></CCol>
              <CCol className="col-8 col-sm-6 col-md-8">
                  <CButton  size="lg" block shape="pill" style={{font:'poppins',background:'#CB694A',color:'white'}} onClick={this.handleLogin} >
                   <strong>Login</strong></CButton>

              </CCol>
              <CCol className="col-2 col-sm-3 col-md-2"></CCol>
          </CRow>
         











        </CForm>

      <p className="text-primary">Forget your password ?</p>
    <br/>
      </CCardBody>

</>;
      }

}

export default  Loginsection

