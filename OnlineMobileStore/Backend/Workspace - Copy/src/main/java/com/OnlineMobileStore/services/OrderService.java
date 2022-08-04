package com.OnlineMobileStore.services;

import com.OnlineMobileStore.exceptions.MobileNotFoundException;
import com.OnlineMobileStore.exceptions.OrderNotFoundException;
import com.OnlineMobileStore.repositories.OrderRepo;
import com.OnlineMobileStore.entities.OrderModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService {

    @Autowired
    OrderRepo orderRepo;


    //view
    public List<OrderModel> findAll() {
        return orderRepo.findAll();
    }

   //Add
   public OrderModel save(OrderModel orderModel) {
       return orderRepo.save(orderModel);
   }

    //view
    public OrderModel findById(int id) throws OrderNotFoundException {
        Optional<OrderModel> optionalProduct = orderRepo.findById(id);
        if (!optionalProduct.isPresent())
            throw new MobileNotFoundException("Order With this Id Doesn't exist" + id);
        return optionalProduct.get();
    }


    public List<OrderModel> findAllByUserId(int id) throws OrderNotFoundException{
        if(orderRepo.findAllByUserId(id).isEmpty())
            throw new MobileNotFoundException("User With this Id Doesn't exist" + id);
        return orderRepo.findAllByUserId(id);
    }



}
