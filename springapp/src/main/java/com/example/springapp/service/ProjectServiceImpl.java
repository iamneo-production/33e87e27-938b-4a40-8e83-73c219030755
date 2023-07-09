package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Project;
import com.example.springapp.repository.ProjectRepository;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository ProjectRepository;

    @Autowired
    public ProjectServiceImpl(ProjectRepository ProjectRepository) {
        this.ProjectRepository = ProjectRepository;
    }

    @Override
    public List<Project> getAllProjects() {
        return ProjectRepository.findAll();
    }

    @Override
    public Project getProjectById(Long id) {
        return ProjectRepository.findById(id).orElse(null);
    }

    @Override
    public Project createProject(Project Project) {
        return ProjectRepository.save(Project);
    }

    @Override
    public Project updateProject(Long id, Project ProjectDetails) {
        Project Project = ProjectRepository.findById(id).orElse(null);

        if (Project != null) {
            Project.setId(ProjectDetails.getId());
            Project.setProjectId(ProjectDetails.getProjectId());
            Project.setName(ProjectDetails.getName());
            Project.setDescription(ProjectDetails.getDescription());
            Project.setAssignedTo(ProjectDetails.getAssignedTo());
            Project.setPriority(ProjectDetails.getPriority());
            Project.setDeadline(ProjectDetails.getDeadline());
            Project.setStatus(ProjectDetails.getStatus());
            return ProjectRepository.save(Project);
        }

        return null;
    }

    @Override
    public void deleteProject(Long id) {
        ProjectRepository.deleteById(id);
    }

}