package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.MyTask;
import com.example.springapp.repository.MyTaskRepository;
import com.example.springapp.exception.UserNotFoundException;
import java.util.List;  

@RestController
@CrossOrigin("http://localhost:3000")
//@CrossOrigin(origins = "*")
//@CrossOrigin
@RequestMapping("/mapmytasks")
public class MyTaskController{
    @Autowired
    private MyTaskRepository taskRepository;
    @PostMapping("/task")
    MyTask newUser(@RequestBody MyTask newUser)
    {
        return taskRepository.save(newUser);
    }

  @GetMapping("/mytasks") 
  List<MyTask> getAllTasks(){
    return taskRepository.findAll(); 
  }

@GetMapping("/task/{id}")
MyTask getUserById(@PathVariable Long id){
  return taskRepository.findById(id)
  .orElseThrow(()-> new UserNotFoundException(id));
}


@PutMapping("/task/{id}")
MyTask updateUser(@RequestBody MyTask newTask, @PathVariable Long id){
  return taskRepository.findById(id)
  .map(task->{
    task.setTaskid(newTask.getTaskid());
    task.setTaskname(newTask.getTaskname());
    task.setProjectname(newTask.getProjectname());
    task.setStatus(newTask.getStatus());
    task.setPercentagecompleted(newTask.getPercentagecompleted());
    task.setDate(newTask.getDate());
    task.setStatus(newTask.getStatus());
    task.setNotes(newTask.getNotes());
    return taskRepository.save(task);
  }).orElseThrow(()->new UserNotFoundException(id));
}
@DeleteMapping("/task/{id}")
String deleteUser(@PathVariable Long id){
  if(!taskRepository.existsById(id)){
    throw new UserNotFoundException(id);
  }
  taskRepository.deleteById(id);
  return "User with id  "+id+" deleted successfully.";
}
}
