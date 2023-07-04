package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Additional methods can be defined here if needed
}