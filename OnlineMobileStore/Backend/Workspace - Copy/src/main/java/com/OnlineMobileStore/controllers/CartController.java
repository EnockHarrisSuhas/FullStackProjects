package com.OnlineMobileStore.controllers;

import com.OnlineMobileStore.services.*;
import com.OnlineMobileStore.entities.CartModel;
import com.OnlineMobileStore.entities.MobileModel;
import com.OnlineMobileStore.entities.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;


@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    ICartService cartService;

    @Autowired
    IUserService userService;

    @Autowired
    IMobileService mobileService;


    @PostMapping("/addProduct")
    public ResponseEntity<?> addCartwithProduct(@RequestBody HashMap<String,String> addCartRequest) {
            int productId = Integer.parseInt(addCartRequest.get("productId"));
            int userId =  Integer.parseInt(addCartRequest.get("userId"));
            int qty =  Integer.parseInt(addCartRequest.get("qty"));

            UserModel user= userService.getUserById(userId);
            MobileModel product = mobileService.getUserById(productId);
            cartService.findByUserAndProduct(userId,productId); //CHECK
            CartModel c=new CartModel(productId,qty,userId,(qty*product.getMobileCost()),product.getMobileName());
            return ResponseEntity.ok(cartService.addCart(c));

    }
    @PutMapping("/update")
    public ResponseEntity<?> getCartsByUserId(@RequestBody HashMap<String,String> getCartRequest) {
        int cId =  Integer.parseInt(getCartRequest.get("cId"));
        int qty =  Integer.parseInt(getCartRequest.get("qty"));

        CartModel obj = cartService.findById(cId);
        int Old_qty= obj.getQuantity();
        obj.setQuantity(qty);
        obj.setPrice((obj.getPrice()/Old_qty)*qty);
        return ResponseEntity.ok(cartService.addCart(obj));

    }
    @GetMapping("/viewAll")
    public ResponseEntity<?> View() {
        List<CartModel> obj = cartService.findAll();
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/view/{id}")
    public ResponseEntity<?> View(@PathVariable int id) {
            List<CartModel> obj = cartService.findAllByUserid(id);
            return ResponseEntity.ok(obj);
    }


    @GetMapping("/view/delete/{cid}")
    public ResponseEntity<?> Delete(@PathVariable int cid) {
            CartModel obj = cartService.findById(cid);
            cartService.delete(cid);

            return ResponseEntity.ok("Item has been remover"+obj);
        }
    }

