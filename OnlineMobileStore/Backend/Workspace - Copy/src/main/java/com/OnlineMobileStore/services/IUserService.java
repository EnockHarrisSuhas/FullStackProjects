package com.OnlineMobileStore.services;
import com.OnlineMobileStore.exceptions.MobileNotFoundException;
import com.OnlineMobileStore.common.LoginResponse;
import com.OnlineMobileStore.entities.UserModel;
import com.OnlineMobileStore.exceptions.UserNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IUserService {

    public LoginResponse addUser(UserModel user);
    public List<UserModel> showAllCustomers();
    public LoginResponse Login_User(String userName, String userPassword);
    public UserModel getUserById(int userId) throws MobileNotFoundException;
    public String DeleteCustomerById(Integer userId) throws UserNotFoundException;
    public UserModel updateCustomer(Integer userId, UserModel user)  throws UserNotFoundException;
}