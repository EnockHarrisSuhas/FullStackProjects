package com.OnlineMobileStore.services;

import com.OnlineMobileStore.entities.OrderItemModel;
import com.OnlineMobileStore.exceptions.OrderItemNotFoundException;


import java.util.List;
import java.util.Optional;

public interface IOrderItemsService {
    public List<OrderItemModel> findAll();
    public void save(OrderItemModel orderItemModel);
    public Optional<OrderItemModel> findById(int id) throws OrderItemNotFoundException;
    public List<OrderItemModel> findAllByOrderid(int id) throws OrderItemNotFoundException;
}
