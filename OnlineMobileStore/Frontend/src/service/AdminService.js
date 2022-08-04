import { baseUrl } from '../util/AppConstants'
import axios from 'axios'

export function AddCategory(cat){
    return axios.post(baseUrl+"/category/", cat);
}

export function viewAllCategory(){
    return axios.get(baseUrl+"/category/get");
}

export function deleteCategoryById(id){
    return axios.delete(baseUrl+"/category/"+id);
}
export function fetchCategoryById(id){
    return axios.get(baseUrl+"/category/"+id);
}
export function updateCategory(cat){
    return axios.put(baseUrl+"/category/update",cat)
}

export function AddAllMobiles(mobile){
    return axios.post(baseUrl+"/api/MobileModel/addMobile", mobile);
}

export function viewAllMobiles(){
    return axios.get(baseUrl+"/api/MobileModel/Mobiles");
}

export function deleteMobileById(id){
    return axios.delete(baseUrl+"/api/MobileModel/delete/"+id);
}
export function updateProductById(mobile){
    return axios.put(baseUrl+"/api/MobileModel/update",mobile);
}
export function fetchProductById(mobileId){
    return axios.get(baseUrl+"/api/MobileModel/mobileById/"+mobileId);
}

export function addUser(cat){
    return axios.post(baseUrl+"/User/register", cat);
}

export function viewAllUsers(){
    return axios.get(baseUrl+"/User/viewAllUsers");
}

export function deleteUserById(id){
    return axios.delete(baseUrl+"/User/deleteById/"+id);
}

export function updateUser(id,user){
    return axios.put(baseUrl+"/User/update/"+id,user);
}

export function fetchUserById(id){
    return axios.get(baseUrl+"/User/viewUserById/"+id);
}