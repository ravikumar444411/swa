import React from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  Link,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
// import {Submit_assignment} from '../../redux_containers/Container'
import {requestOptions,Mytime,Mydate,getAllUser} from '../Config'

class Assignment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
    componentDidMount() {
          fetch(getAllUser, requestOptions)
           .then((response) => response.json())
           .then((data) => {this.setState({data:data.UserData}); console.log(data.UserData) })
           .catch(error => console.log("Error detected: " + error))
       }


    render() {

        return  <> 
      <CRow>
        <CCol>
          <CCard>
           
            <CCardBody>
            <form className="form-inline">
              <input className="form-control mr-sm-2" name="search" placeholder="Student name" onChange={this.handleChange}/>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.searchHandle}>Search</button>
            </form>
              <br />
              

              <br />

              <table className="table table-hover  table-responsive-md">
                <thead className="thead-light">
                  <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>                           
                    <th className="">Action</th>
                 
                  </tr>
                </thead>
               <tbody>

            {this.state.data.map((list,index) => (
              <tr key={index}>
              
                <td  className="border-left" width="5%"><div>{index+1}</div></td>
                <td  width="15%" > {list._id} </td>
                <td  width="15%" > {list.name} </td>
                <td  width="20%" > {list.email} </td>
                <td> {list.phone}</td>
                
                <td className=" border-right">
                    <CRow className=" row">
                        <CCol   className="mb-3 col-12 col-lg-12">
                          <CButton block color="danger">Remove</CButton>
                        </CCol>
                     
                
                     </CRow>
                </td>
              </tr>
   ))} 
                  
                </tbody> 
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      </>;
        }

}

export default Assignment
