import React from 'react'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react'
import {requestOptions,getAllVoucher} from '../Config'
import Upload from './Upload'
import Edit from './Edit'
import View from './View'

class Voucher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
    handleRemove = (value_id) =>{
      const token = localStorage.getItem('token');
      axios.delete(`${getAllVoucher}${value_id}`,{ headers: { "Authorization": `Bearer ${token}` } })
              .then(data => {
                  alert("Voucher has been removed");
                  window.location.reload();
                }) 
              .catch(error => console.log("Error detected: " + error))
  
    }
    componentDidMount() {
          fetch(getAllVoucher, requestOptions)
           .then((response) => response.json())
           .then((data) => {this.setState({data:data.voucherData}); console.log(data) })
           .catch(error => console.log("Error detected: " + error))
       }


    render() {

        return  <> 
        <Upload/>
      <CRow>
        <CCol>
          <CCard>
           
            <CCardBody>
            <p style={{font:'poppins',color:'#CB694A'}}  className="h5">Available Voucher</p>

            <form className="form-inline">
              <input   className="form-control mr-sm-4 rounded-pill" name="search" placeholder="Voucher name" onChange={this.handleChange}/>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.searchHandle}>Search</button>
            </form>
              <br />
              

              <br />

              <table className="table table-hover  table-responsive-md">
                <thead className="thead-light">
                  <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Voucher ame</th>
                    <th>Expiry Date</th>
                    <th>Category</th>                           
                    <th className="">Action</th>
                 
                  </tr>
                </thead>
              <tbody>

            {this.state.data.map((list,index) => (
              <tr key={index}>
              
                <td  className="border-left" width="2%"><div>{index+1}</div></td>
                <td width="10%"> {list._id} </td>
                <td width="10%"> {list.voucherName} </td>
                <td> {list.expiry} </td>
                <td> {list.category}</td>
                
                <td className=" border-right">
                    <CRow className=" row">
                        <CCol   className="mb-3 col-12 col-lg-4">
                          <View voucherData={list} />
                        </CCol>
                        <CCol   className="mb-3 col-12 col-lg-4">
                          <Edit voucherData={list}/>
                        </CCol>
                        <CCol   className="mb-3 col-12 col-lg-4">
                          <CButton block color="danger" onClick={ () =>this.handleRemove(list._id)}>Remove</CButton>
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

export default Voucher
