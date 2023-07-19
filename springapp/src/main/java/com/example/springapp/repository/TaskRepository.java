package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // Additional methods can be defined here if needed
}
