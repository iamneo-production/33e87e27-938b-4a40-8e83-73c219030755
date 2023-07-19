package com.example.springapp.service;

import com.example.springapp.model.Project;

import java.util.List;

public interface ProjectService {
    List<Project> getAllProjects();

    Project getProjectById(Long id);

    Project createProject(Project project);

    Project updateProject(Long id, Project project);

    void deleteProject(Long id);
}