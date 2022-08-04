import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { AddToCart,fetchMobileById } from '../../service/ProductService';
import NavBar from '../navBar/NavBar';
import '../../util/Form.css'
const MobileDetails = () => {

    const {item} = useParams();
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [product,setProduct] = useState("");
   
    

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
           }
        fetchMobileById(item).then(resp => {
        setProduct(resp.data);
        })
        
    }, [item])

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            productId:item,
            userId:user.userID ,
            qty:1
        }
        AddToCart(payload).then(resp => navigate(-1))
        .catch(error=>console.log("something went wrong"))
    }

    return(
        <>
        <NavBar/>
        <div className="form1">
        <form className="login-form"  >
                    <h1 className='heading'>Mobile Details</h1>
                    <br></br>
                    Mobile Id 
                    <input className='input' type="number" 
                    value={item} disabled/>
                    Mobile Name
                    <input className='input' type="text" 
                    value={product.mobileName} disabled/>
                    Mobile Cost
                    <input className='input' type="number" 
                    value={product.mobileCost} disabled/>
                    Manufacturing Date
                    <input className='input' type="date" 
                    value={product.mfd} disabled/>
                    Model Number
                    <input className='input' type="text"  
                    value={product.modelNumber} disabled/>
                    Company Name
                    <input className='input' type="text" 
                    value={product.companyName} disabled/>
                    
                    <br></br>
                    <button className='button' onClick={handleSubmit}>AddToCart</button>
        </form>
        </div>
        </>
    )

}
export default MobileDetails;
/*Category
                    <input  type="text" 
                    value={category} disabled/> */