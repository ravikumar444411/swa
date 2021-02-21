import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInput,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
 
  CNav,
  CNavItem,
  CNavLink,
 
  CTabContent,
  CTabPane,
  CTabs,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import logo from './logo.svg'
import Loginsection from './Loginsection'
import Signinsection from './Signinsection'

const Login = () => {
  const [active, setActive] = useState(1)
 
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
      <div className="justify-content-center">
        <div className="row justify-content-center">
    
   
        <div  className=" col-sm-12 col-lg-5"> 

          <CCard className="p-4 " style={{background:'#F8FAFC'}}>
             <CRow className="justify-content-center">
                        <CCol md="10" lg="12" xl="9">
                        <CCard className="shadow ">
                      
                         <p className="text-center h4 mt-3"> Admin Panel </p>
                      <CCardBody>
                      <CTabs activeTab="home">
                        <CNav variant="">
                          <CNavItem className="border-bottom">
                            <CNavLink data-tab="home" style={{borderBottom:'3px solid #F9A61A',}}>
                              <strong style={{font:'poppins',color:'#242526'}}>Register</strong>
                            </CNavLink>
                          </CNavItem>
                          <CNavItem>
                            <CNavLink data-tab="profile">
                            <strong style={{font:'poppins',color:'#242526'}}>Login</strong>
                            </CNavLink>
                          </CNavItem>                     
                        </CNav>
                        <CTabContent className="mt-2">
                              <CTabPane data-tab="home">
                              <Signinsection/>
                              </CTabPane>
                              <CTabPane data-tab="profile">
                                <Loginsection/>
                              </CTabPane>
                        </CTabContent>
                      </CTabs>
                      </CCardBody>
                      </CCard>      
                 </CCol>
               </CRow>               
           </CCard>
        
        </div>
        </div>
        </div>
      </CContainer>
    </div>
  )
}

export default Login
