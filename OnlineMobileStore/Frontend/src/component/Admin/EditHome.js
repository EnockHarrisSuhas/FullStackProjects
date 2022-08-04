import React, { useState, useEffect } from 'react';
import {useParams,useNavigate } from 'react-router-dom';
import { deleteMobileById, fetchProductById, updateProductById } from '../../service/AdminService';
import { ApiUrl } from '../../util/AppConstants';

import '../../util/Form.css';
import AdminNav from './adminNav';

function EditProduct() {
    const [mId, setMobileID] = useState('');
    const [mName, setMobileName] = useState('');
    const [mModel, setModelNumber] = useState('');
    const [mComapny, setComapnyName] = useState('');
    const [mfd, setMfd] = useState('');
    const [mCost, setMobileCost] = useState('');
    const [mCategoryId, setmCategoryId] = useState('');
    const [mCategoryName, setmCategoryName] = useState('');

    /*const [Mobile, setMobile] = useState([]);*/
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
           fetchProductById(id).then(resp => {
            setMobileID(resp.data.mobileId);
            setMobileName(resp.data.mobileName);
            setModelNumber(resp.data.modelNumber);
            setComapnyName(resp.data.companyName);
            setMfd(resp.data.mfd);
            setMobileCost(resp.data.mobileCost);
            setmCategoryId(resp.data.category.categoryId);
            setmCategoryName(resp.data.category.categoryName);
        });
    }, [id])

    /*useEffect(() => {
        if(parseInt(id)>0){
            deleteMobileById(id).then(resp=>navigate(-1))
        }
    }, [id])*/
    
    const handleDelete = () => {
        deleteMobileById(id).then(resp=>navigate(-1))
    }
    
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {
        let errors = {};

        if (!mName) {
            errors["pNameError"] = "Mobile Name is required"
        }
        else if (!mCost) {
            errors["pPriceError"] = "Mobile Price is required"
        }
        else if (mCost < 0) {
            errors["pPriceError"] = "Mobile Price should be positive number"
        }
        else if (!mfd) {
            errors["pMfdError"] = "Mobile Manufature Date is required"
        }
        else if (!mModel) {
            errors["pModelError"] = "Mobile Model is required"
        }
        else if (!mComapny) {
            errors["pCompanyError"] = "Mobile Company is required"
        }
        else if (!mCategoryId) {
            errors["pCategoryIdError"] = "Mobile CategoryId is required"
        } 
        else if(!mCategoryName) {
            errors["pCategoryNameError"] = "Mobile CategoryName is required"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        //alert("inside no error " + noErrors);

        if (noErrors) {
        const payload = {
            mobileId: mId,
            mobileName: mName,
            mobileCost: mCost,
            mfd: mfd,
            modelNumber: mModel,
            companyName: mComapny,
            category: {
                categoryId: mCategoryId,
                CategoryName :mCategoryName,
            }
        }
        updateProductById(payload).then(resp => navigate(-1)).catch(error=>console.log("something went wrong"),
        window.location.replace(ApiUrl+"/admin"));
    }
    }
/*className="login-page"*/
    return (
        <><AdminNav/>
        <div >
                <div className="form1">
                    <form className="login-form">                    
                        <h2 className='heading'>Update/Delete Mobile</h2>
                    <br></br>
                    <input className='input' type="text" id="mId" name="mId" placeholder='MobileId' disabled
                    value={mId} onChange={e => setMobileID(e.target.value)}></input>

                    <input className='input' type="text" id="mName" name="mName" placeholder='MobileName' required
                    value={mName} onChange={e => setMobileName(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pNameError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pNameError}</div>
                        }
                    </div>


                    <input className='input' type="number" id="mCost" name="mCost" placeholder='MobileCost' required
                    value={mCost} onChange={e => setMobileCost(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pPriceError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pPriceError}</div>
                        }
                    </div>

                    <input className='input' type="date" id="mfd" name="mfd" required
                    value={mfd} placeholder="YYYY-MM-DD" onChange={e => setMfd(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pMfdError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pMfdError}</div>
                        }
                    </div>

                    <input className='input' type="text" id="mModel" name="mModel" placeholder='ModelNumber' required
                     value={mModel} onChange={e => setModelNumber(e.target.value)}></input>
                     <div>
                        {
                            formErrors.pModelError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pModelError}</div>
                        }
                    </div>

                    <input className='input' type="text" id="mComapny" name="mComapny" placeholder='CompanyName' required
                     value={mComapny} onChange={e => setComapnyName(e.target.value)}></input>
                      <div>
                        {
                            formErrors.pCompanyError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pCompanyError}</div>
                        }
                    </div>

                    <input className='input' type="number" id="mCategoryId" name="mCategoryId" placeholder='CategoryId' required
                     value={mCategoryId} onChange={e => setmCategoryId(e.target.value)}></input>
                     <div>
                        {
                            formErrors.pCategoryIdError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pCategoryIdError}</div>
                        }
                    </div>

                    <input className='input' type="text" id="mCategoryName" name="mCategoryName" placeholder='CategoryName' required
                     value={mCategoryName} onChange={e => setmCategoryName(e.target.value)}></input>
                     <div>
                        {
                            formErrors.pCategoryNameError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pCategoryNameError}</div>
                        }
                    </div>

                    <button className='button' onClick={handleSubmit}>Submit</button>

                    <button id='button1' onClick={handleDelete}>Delete</button>
                     
                    
                    </form>
            </div>
        </div>
        </>
    )
}
/**<Link to={`/user/edit/${mId}`}>Delete</Link> */
export default EditProduct;