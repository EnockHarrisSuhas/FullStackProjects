package com.OnlineMobileStore.controllers;

import com.OnlineMobileStore.exceptions.OrderItemNotFoundException;
import com.OnlineMobileStore.services.*;
import com.OnlineMobileStore.entities.CartModel;
import com.OnlineMobileStore.entities.OrderItemModel;
import com.OnlineMobileStore.entities.OrderModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/orderItem")
public class OrderItemController {

    @Autowired
    ICartService cartService;

    @Autowired
    IOrderItemsService orderItemService;

    @Autowired
    IOrderService orderService;

    @PutMapping("/update")
    public  List<CartModel> updateOrderItem(@RequestBody HashMap<String,String> addCartRequest){
        int uId=Integer.parseInt(addCartRequest.get("userId"));
        int oId=Integer.parseInt(addCartRequest.get("orderId"));

        List<CartModel> productL= cartService.findAllByUserid(uId);
        for (CartModel obj:productL)
        {
            OrderItemModel orderModel= new OrderItemModel(oId,obj.getProduct(),obj.getQuantity(),obj.getPrice(), obj.getProductName());
            orderItemService.save(orderModel);
            cartService.delete(obj.getCartId());
        }

        return productL;
    }

    @GetMapping("/viewAll")
    public ResponseEntity<?> View() {

            List<OrderItemModel> obj = orderItemService.findAll();
            return ResponseEntity.ok(obj);

    }

    @GetMapping("/view/{id}")
    public ResponseEntity<?> View(@PathVariable int id) throws OrderItemNotFoundException{

            List<OrderItemModel> obj = orderItemService.findAllByOrderid(id);
            return ResponseEntity.ok(obj);

    }

    @GetMapping("/view/user/{id}")
    public List<List<OrderItemModel>> ViewUser(@PathVariable int id) throws OrderItemNotFoundException {
        List<OrderModel> objL = orderService.findAllByUserId(id);
        List<List<OrderItemModel>> UserOrder = new ArrayList<>();
        for (OrderModel obj:objL){
            UserOrder.add(orderItemService.findAllByOrderid(obj.getOrderID()));
        }

        return UserOrder;
    }



}
