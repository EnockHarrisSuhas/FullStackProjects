import React, { useState } from 'react';
import '../../util/Form.css';
import { AddAllMobiles } from '../../service/AdminService';
import { useNavigate } from 'react-router-dom';
import { ApiUrl } from '../../util/AppConstants';


function AddMobile() {

    //Intialization
    const [mName, setMobileName] = useState('');
    const [mModel, setModelNumber] = useState('');
    const [mComapny, setComapnyName] = useState('');
    const [mfd, setMfd] = useState('');
    const [mCost, setMobileCost] = useState('');
    const [mCategoryId, setmCategoryId] = useState('');
    const [mCategoryName, setmCategoryName] = useState('');

    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit1 = () => {
        //Handling Validations
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

            //alert("inside no error");
            
            const payload = {
                mobileName: mName,
                mobileCost: mCost,
                mfd: mfd,
                modelNumber: mModel,
                companyName: mComapny,
                category: {
                    categoryId: mCategoryId,
                    categoryName: mCategoryName
                }
            }
            //Adding the mobile API
            AddAllMobiles(payload).then(resp => window.location.replace(ApiUrl+"/admin"));
        }
    }

    return (
        <div className="login-page">
            <div className="form1">
                
                    <h2 className='heading'>Add Mobile</h2>
                    <br></br>

                    <input className='input' type="text" id="mName" name="mName" placeholder='MobileName'
                        value={mName} onChange={e => setMobileName(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pNameError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pNameError}</div>
                        }
                    </div>

                    <input className='input' type="number" id="mCost" name="mCost" placeholder='MobileCost'
                        value={mCost} onChange={e => setMobileCost(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pPriceError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pPriceError}</div>
                        }
                    </div>

                    <input className='input' type="date" id="mfd" name="mfd"
                        value={mfd} placeholder="YYYY-MM-DD" onChange={e => setMfd(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pMfdError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pMfdError}</div>
                        }
                    </div>

                    <input className='input' type="text" id="mModel" name="mModel" placeholder='ModelNumber'
                        value={mModel} onChange={e => setModelNumber(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pModelError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pModelError}</div>
                        }
                    </div>


                    <input className='input' type="text" id="mComapny" name="mComapny" placeholder='CompanyName'
                        value={mComapny} onChange={e => setComapnyName(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pCompanyError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pCompanyError}</div>
                        }
                    </div>

                    <input className='input' type="number" id="mCategoryId" name="mCategoryId" placeholder='CategoryId'
                        value={mCategoryId} onChange={e => setmCategoryId(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pCategoryIdError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pCategoryIdError}</div>
                        }
                    </div>

                    <input className='input' type="text" id="mCategoryName" name="mCategoryName" placeholder='CategoryName'
                        value={mCategoryName} onChange={e => setmCategoryName(e.target.value)}></input>
                    <div>
                        {
                            formErrors.pCategoryNameError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pCategoryNameError}</div>
                        }
                    </div>

                    <button className='button' onClick={handleSubmit1}>Submit</button>
                
            </div>
        </div>
    )
}

export default AddMobile;

