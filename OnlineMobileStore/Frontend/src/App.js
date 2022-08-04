import {BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './component/loginModule/Login'
import MobileDisplay from './component/mobileModule/mobile'
import Cart from './component/cartModule/Cart'
import UpdateCart from './component/cartModule/updateCart';
import MobileDetails from './component/mobileModule/mobileDetail';
import ViewAllOrders from './component/orderModule/ViewAllOrders';
import ViewOrderItemByOrderId from './component/orderModule/ViewOrderItemByOrderId';

import Admin from './component/Admin/Admin';
import AdminCategory from './component/Admin/AdminCategory';
import AdminBoard from './component/Admin/AdminHome';
import AdminUser from './component/Admin/AdminUser';
import UpdateUser from './component/Admin/EditUser';
import EditProduct from './component/Admin/EditHome';
import Profile from './component/navBar/Profile';
import EditCat from './component/Admin/EditCategory';
function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        
        <Route path="/home" element={<MobileDisplay />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/delete/:id" element={<Cart />}></Route>
        <Route path="/cart/update/:id" element={<UpdateCart />}/>
        <Route path="/home/product/:item" element={<MobileDetails />}/>
        <Route path="/order" element={<ViewAllOrders />}></Route>
        <Route path="/order/:id" element={<ViewOrderItemByOrderId />}/>
        <Route path="/order/delete/:id" element={<ViewAllOrders />} />
        <Route path="/search/:name" element={<MobileDisplay />} />
        
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/cat" element={<AdminCategory/>}></Route>
        <Route path="/admin/user" element={<AdminUser/>}></Route>
        <Route path="/user/edit/:id" element={<AdminUser/>}></Route>
        <Route path="/user/update/:id" element={<UpdateUser/>}></Route>
        <Route path="/product/edit/:id" element={<AdminBoard/>}></Route>
        <Route path="/cat/edit/:id" element={<AdminCategory/>}></Route>
        <Route path="/cat/update/:id" element={<EditCat/>}></Route>
        <Route path="/admin/product/:id" element={<EditProduct/>}></Route>


      </Routes>
    </BrowserRouter>
    
  );
}
//<Route path="/product/find/:id" element={<MobileDisplay />}></Route>
export default App;
