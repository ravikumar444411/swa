import React from 'react';



const User = React.lazy(() => import('./views/user/User'));
const Vendor = React.lazy(() => import('./views/vendor/Vendor'));
const Voucher = React.lazy(() => import('./views/voucher/voucher'));





const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/user', name: 'user', component: User },
  { path: '/vendor', name: 'vendor', component: Vendor },
  { path: '/voucher', name: 'vendor', component: Voucher },


 
];

export default routes;
