package com.OnlineMobileStore.repositories;

import com.OnlineMobileStore.entities.MobileModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<MobileModel, Integer> {
    public List<MobileModel> findByMobileName(String mobileName);
}
