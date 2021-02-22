const baseUrl = "https://swatest1.herokuapp.com";

// get information of student start
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmk0NDQ0MTEiLCJ1c2VyaWQiOiI2MDI4ZWZhZTkxOTQ4ZDM2MzhkODcwNjUiLCJpYXQiOjE2MTM0MTY0NjksImV4cCI6MTYxMzQyMDA2OX0.zSiqiMx6gwKnXBRSxecC8sH5K61xe4d0liyRZWqWckM';
const token = localStorage.getItem('token');
 export const requestOptions = {
  method: 'GET',
  mode: "cors",
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}
// fetch(`${baseUrl}/api/v1/auth/profile/`, requestOptions2)
// .then((response) => response.json())
// .then((data) => {
//   localStorage.setItem('batch_name', data.batch_name);
//   localStorage.setItem('batch', data.batch);
//   localStorage.setItem('fullName', data.fullName);
//   localStorage.setItem('id', data.id);
// })
// .catch(error => console.log("Error detected: " + error))

// get information of student end


// export const requestOptions = {
//     method: 'GET',
//     mode: "cors",
//     headers: { 'Content-Type': 'application/json' }
// };


export const getAllUser = `${baseUrl}/user/`
export const getAllVendor = `${baseUrl}/vendor/`
export const getAllVoucher = `${baseUrl}/voucher/`
export const getAllCategory = `${baseUrl}/category/`


export const addCategory = `${baseUrl}/category`
export const addVoucher = `${baseUrl}/voucher`
export const addVendor = `${baseUrl}/vendor`


export const loginUrl = `${baseUrl}/user/login`
