import React from "react";
import { Link} from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faFilter, faMobile, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ApiUrl } from "../../util/AppConstants";


function AdminNav() {
    
    //Logout
    const logout = () => {
        localStorage.clear();
        window.location.replace(ApiUrl + "/");
    }
    //Checking Admin Logged in or Not
    if (localStorage.getItem('Admin') === null || localStorage.getItem('Admin') !== "true") {
        //alert("You need to login as Admin");
        window.location.replace(ApiUrl + "/");
      }
    
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/admin"} className="navbar-brand">
                    <FontAwesomeIcon icon={faAt} /> Online <FontAwesomeIcon icon={faMobile} /> Mobile-Store
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/admin/user"} className="nav-link">
                            <FontAwesomeIcon icon={faUser} /> User
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/admin/cat"} className="nav-link">
                            <FontAwesomeIcon icon={faFilter} /> Category </Link>
                    </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link" onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> LogOut
                            </a>
                        </li>
                    
                </div>

            </nav>
            
        </div>
    )
}

export default AdminNav;