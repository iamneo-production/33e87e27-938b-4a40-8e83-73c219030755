package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.MyTask;

@Repository
public interface MyTaskRepository extends JpaRepository<MyTask,Long>{
    
}
