package com.OnlineMobileStore.service;

import com.OnlineMobileStore.entities.CategoryModel;
import com.OnlineMobileStore.repositories.CategoryRepository;
import com.OnlineMobileStore.services.CategoryServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class CategoryServiceTest {

    @InjectMocks
    private CategoryServiceImpl categoryService=new CategoryServiceImpl();

    @Mock
    CategoryRepository categoryRepository;



    @Test
    void testAdd(){
        CategoryModel categoryModel=new CategoryModel();
        categoryModel.setCategoryId(1);
        categoryModel.setCategoryName("Android");

        when(categoryRepository.save(categoryModel)).thenReturn(categoryModel);
        CategoryModel cate = categoryService.addCategory(categoryModel);
        assertEquals(1,cate.getCategoryId());
        verify(categoryRepository,times(1)).save(cate); // useful for testing void methods
    }

    @Test
    void testGetById(){
        CategoryModel categoryModel=new CategoryModel();
        categoryModel.setCategoryId(1);
        categoryModel.setCategoryName("Android");

        Optional<CategoryModel> optionalProduct = Optional.of(categoryModel);
        when(categoryRepository.findById(1)).thenReturn(optionalProduct);
        assertEquals("Android",optionalProduct.get().getCategoryName());
    }

    @Test
    void testGet(){
        CategoryModel categoryModel=new CategoryModel();
        categoryModel.setCategoryId(1);
        categoryModel.setCategoryName("Android");
        CategoryModel categoryModel2=new CategoryModel();
        categoryModel.setCategoryId(2);
        categoryModel.setCategoryName("IOS");
        List<CategoryModel> category = new ArrayList<>();
        category.add(categoryModel);
        category.add(categoryModel2);


        when(categoryRepository.findAll()).thenReturn(category);
        assertEquals(2,category.size());
    }
/*
    @Test
    void testUpdate(){
        CategoryModel categoryModel=new CategoryModel();
        categoryModel.setCategoryId(1);
        categoryModel.setCategoryName("Android");

        CategoryModel optionalProduct = categoryModel;
        when(categoryRepository.save(categoryModel)).thenReturn(optionalProduct);
        CategoryModel newcat=categoryService.updateCategory(new CategoryModel(1,"IOS"));
        verify(categoryRepository,times(1)).save(newcat);
    }
*/
}
