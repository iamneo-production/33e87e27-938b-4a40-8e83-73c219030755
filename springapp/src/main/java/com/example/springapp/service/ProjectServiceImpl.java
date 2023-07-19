package com.example.springapp.service;

import com.example.springapp.model.Project;
import com.example.springapp.repository.ProjectRepository;
import com.example.springapp.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project getProjectById(Long id) {
        Optional<Project> project = projectRepository.findById(id);
        return project.orElse(null);
    }

    @Override
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Long id, Project updatedProject) {
        Project project = getProjectById(id);
        if (project != null) {
            project.setName(updatedProject.getName());
            project.setDescription(updatedProject.getDescription());
            project.setStartDate(updatedProject.getStartDate());
            project.setEndDate(updatedProject.getEndDate());
            return projectRepository.save(project);
        }
        return null;
    }

    @Override
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}