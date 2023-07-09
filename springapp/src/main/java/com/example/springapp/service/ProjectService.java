package com.example.springapp.service;
import java.util.List;
import com.example.springapp.model.Project;
public interface ProjectService {
    List<Project> getAllProjects();
    Project getProjectById(Long id);
    Project createProject(Project Project);
    Project updateProject(Long id, Project ProjectDetails);
    void deleteProject(Long id);
}