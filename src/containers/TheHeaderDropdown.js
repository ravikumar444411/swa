import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {logOutUrl} from '../views/Config'

const handle_LogOut = (event)=>{
  event.preventDefault();
  localStorage.setItem('token', '');
     window.location.reload();

  // const token = localStorage.getItem('token');
  // const requestOptions2 = {
  //     method: 'GET',
  //     mode: "cors",
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       'Authorization': `Token ${token}`,
  //       }
  // }
  // fetch(logOutUrl, requestOptions2)
  // .then((response) => response.json())
  // .then((data) => {
  //   // console.log(data)
  //   alert("succesfullly Log out");
  //   localStorage.setItem('token', '');
  //   window.location.reload();
  // })
  // .catch(error => console.log("Error detected: " + error))

}

const TheHeaderDropdown = () => {

  // for logout function start

    // for logout function end
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        
        
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        
        <CDropdownItem divider />
        <CDropdownItem onClick={handle_LogOut}>
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Sign Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
