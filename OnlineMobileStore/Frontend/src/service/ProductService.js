import { baseUrl } from '../util/AppConstants'
import axios from 'axios'
//MobileList
export function fetchAllProducts() {
    return axios.get(baseUrl + "/api/MobileModel/Mobiles");
}

export function fetchProductById(productId) {
    return axios.get(baseUrl + "/product/find/" + productId);
}
//Reg 
export function addProduct(product) {
    return axios.post(baseUrl+"/User/register", product)
}
//Log in
export function logIn(product) {
    return axios.post(baseUrl+"/User/login",product)
}
//Cart
export function fetchAllItems(userId) {
    return axios.get(baseUrl + "/api/cart/view/" + userId);
}
export function deleteItembyCartid(Itemid) {
    return axios.get(baseUrl + "/api/cart/view/delete/"+Itemid);
}   
//Cart
export function fetchCartById(id) {
    return axios.get(baseUrl + "/api/cart/view/" + id);
}
//Cart
export function editCart(cart) {
    return axios.put(baseUrl + "/api/cart/update" , cart);
}
//CartAdd
export function AddToCart(jinput) {
    return axios.post(baseUrl + "/api/cart/addProduct" , jinput);
}
//get mobile by id
export function fetchMobileById(item) {
    return axios.get(baseUrl + "/api/MobileModel/mobileById/" + item);
}
//get mobile by Name
export function fetchMobileByName(name) {
    return axios.get(baseUrl + "/api/MobileModel/search/" + name);
}