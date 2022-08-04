package com.OnlineMobileStore.services;

import com.OnlineMobileStore.entities.OrderModel;
import com.OnlineMobileStore.exceptions.OrderNotFoundException;

import java.util.List;

public interface IOrderService {
    public List<OrderModel> findAll();
    public OrderModel save(OrderModel orderModel);
    public OrderModel findById(int id) throws OrderNotFoundException;
    public List<OrderModel> findAllByUserId(int id) throws OrderNotFoundException;
}
