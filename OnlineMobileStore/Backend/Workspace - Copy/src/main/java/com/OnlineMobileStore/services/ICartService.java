package com.OnlineMobileStore.services;

import com.OnlineMobileStore.exceptions.MobileNotFoundException;
import com.OnlineMobileStore.entities.CartModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICartService {
    public List < CartModel > findAll();
    public CartModel addCart(CartModel cartModel);
    public CartModel findById(int id);
    public List<CartModel> findAllByUserid(int User_id);
    public Boolean findByUserAndProduct(int User_id, int pid) throws MobileNotFoundException;
    public void delete(int id);
    public float TotalSum(int userId);
}
