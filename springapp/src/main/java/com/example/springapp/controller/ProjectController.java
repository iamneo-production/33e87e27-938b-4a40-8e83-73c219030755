package com.example.springapp.controller ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.model.Project;
import com.example.springapp.service.ProjectService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000" ,maxAge =3600)
public class ProjectController {
    private ProjectService ProjectService;

    @Autowired
    public ProjectController(ProjectService ProjectService) {
        this.ProjectService = ProjectService;
    }

    // Get all tasks
    @GetMapping("/getAll")
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> Projects =  ProjectService.getAllProjects();
        return new ResponseEntity<>(Projects, HttpStatus.OK);
    }

    // Create a new Project
    @PostMapping("/add")
    public ResponseEntity<Void> createProject(@RequestBody Project Project) {
        ProjectService.createProject(Project);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // Get a Project by ID
    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return ProjectService.getProjectById(id);
    }

    // Update a Project
    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project ProjectDetails) {
        return ProjectService.updateProject(id, ProjectDetails);
    }

    // Delete a Project
    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        ProjectService.deleteProject(id);
    }
}
