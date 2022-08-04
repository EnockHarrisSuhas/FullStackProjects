package com.OnlineMobileStore.controllers;

import com.OnlineMobileStore.exceptions.OrderNotFoundException;
import com.OnlineMobileStore.services.*;
import com.OnlineMobileStore.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/order")
public class OrderController {


    @Autowired
    ICartService cartService;

    @Autowired
    IUserService userService;

    @Autowired
    IOrderService orderService;



    @PostMapping("/add")
    public ResponseEntity<?> addToOrder(@RequestBody HashMap<String,String> addOrderRequest) {
            int userId =  Integer.parseInt(addOrderRequest.get("userId"));
            UserModel user= userService.getUserById(userId);
            float TotalCost=cartService.TotalSum(userId);
            OrderModel o=new OrderModel(userId,TotalCost);
            orderService.save(o);
            return ResponseEntity.ok(o);

    }

    @GetMapping("/viewAll")
    public ResponseEntity<?> View() {
            List<OrderModel> obj = orderService.findAll();
            return ResponseEntity.ok(obj);

    }

    @GetMapping("/view/{id}")
    public ResponseEntity<?> ViewWithId(@PathVariable int id) throws OrderNotFoundException{
            List<OrderModel> obj = orderService.findAllByUserId(id);
            return ResponseEntity.ok(obj);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id) throws OrderNotFoundException{
        OrderModel orderModel= orderService.findById(id);
        orderModel.setStatus("Cancelled");
        orderService.save(orderModel);
        return ResponseEntity.ok("Order with Id "+id+" has been Cancelled");
    }





}
