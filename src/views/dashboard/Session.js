import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CAlert,
  CRow
} from '@coreui/react'
import { Link } from 'react-router-dom'
import {requestOptions,todaysessionUrl,Mytime} from '../Config'

class Session extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todaysessionList: [],
      };
    }
    componentDidMount() {
        
          fetch(todaysessionUrl, requestOptions)
           .then((response) => response.json())
           .then((data) => {this.setState({todaysessionList:data})})
           .catch(error => console.log("Error detected: " + error))

          }
          render() {
            const isrecord = ()=> (<tr key={0}>      
                                <td></td>
                                <td> No today session found</td>
                                <td> </td>
                                <td></td>
                                <td ></td>
                                </tr>);

     
        return  <> 
 
          <CCard>
          <CCardHeader><span className="h3">Your Today Session</span></CCardHeader>
            <CCardBody>
                        <table className="table table-hover ">
                        <thead className="thead-light">
                            <tr>
                              <th>#</th>
                              <th>Session Name</th>
                              <th>Pre read</th>
                              <th>Time</th>
                              <th className="text-center">Action</th>
                            </tr>
                        </thead>
                              <tbody>
                               
                          {this.state.todaysessionList.length<1 && isrecord()}


                              {this.state.todaysessionList.map((list,index) => (
                                <tr key={index}>      
                                <td><div >{index+1}</div></td>
                                <td> <Link to="/dashboard/Preread" ><div onClick={()=>this.props.getTodaySessionHandler(list)}>{list.batch}</div></Link></td>
                                <td><div >{list.title}</div></td>
                                <td ><div className="small text-muted">{Mytime(list.startDateTime)} to {Mytime(list.endDateTime)}</div></td>
                                <td className="text-center ">
                                        <CRow className="align-items-center row">
                                          <CCol   className="mb-3 col-6">
                                            <CButton block color="info">
                                              <a target="_blank" href={list.meetlink}>Join</a>
                                            </CButton>
                                        </CCol>
                                         
                                        <CCol  className="mb-3 col-6">
                                          <CButton block variant="outline" color="danger">Cancel</CButton>
                                      </CCol>
                                      </CRow>
                                  </td>
                                </tr>
                                     ))}
                              </tbody>
                            </table>


    
            </CCardBody>
          </CCard>
      
      </>;
        }

}

export default Session
