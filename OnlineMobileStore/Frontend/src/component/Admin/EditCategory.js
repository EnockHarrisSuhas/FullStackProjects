import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { fetchCategoryById, updateCategory } from '../../service/AdminService';

import '../../util/Form.css';
function EditCat(){
    const [cId, setCategoryId] = useState('');
    const [CName, setCategoryName] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategoryById(id).then(resp => {
            setCategoryId(resp.data.categoryId);
            setCategoryName(resp.data.categoryName);
        });
    }, [id])

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!cId) {
            errors["pIdError"] = "Category Id is required"
        }
        else if (!CName) {
            errors["pNameError"] = "Category Name is required"
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        //alert("inside no error " + noErrors);

        if (noErrors) {

        const payload = {
            categoryId: cId,
            categoryName: CName
        }
        updateCategory(payload).then(resp => navigate(-1)).catch(error=>console.log("something went wrong"))
    }
}
return (
    <div className="login-page">
        <div className="form1">
            <form className="login-form">
                <h2 className='heading'>Update Category</h2>
                <br></br>
                <label>CategoryID</label>
                <input className='input' type="number" id="cId" name="cId" value={cId} disabled
                 onChange={e => setCategoryId(e.target.value)}></input>
                 <div>
                        {
                            formErrors.pIdError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pIdError}</div>
                        }
                    </div>

                <label>CategoryName</label>
                <input className='input' type="text" id="CName" name="CName" value={CName} required
                 onChange={e => setCategoryName(e.target.value)}></input>
                 <div>
                        {
                            formErrors.pNameError && <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.pNameError}</div>
                        }
                    </div>

                <button className='button' onClick={handleSubmit} formAction="/admin/cat">Submit</button>
            </form>
        </div>
    </div>
)
}

export default EditCat;