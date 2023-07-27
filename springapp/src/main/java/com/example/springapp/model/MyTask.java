package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import org.springframework.format.annotation.NumberFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Table
@Entity
public class MyTask{
     @Id 
     @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private Long taskid;
    private String taskname;
    private String projectname; 
    private String status;
    @NumberFormat(style=NumberFormat.Style.PERCENT)
    private Float percentagecompleted;
    @JsonFormat(pattern="yyyy-MM-dd")
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR")
    private Date date;
    private String notes;
    
   
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getTaskid() {
        return taskid;
    }
    public void setTaskid(Long taskid) {
        this.taskid = taskid;
    }

    public String getProjectname() {
        return projectname;
    }
    public void setProjectname(String projectname) {
        this.projectname = projectname;
    }
    public String getTaskname() {
        return taskname;
    }
    public void setTaskname(String taskname) {
        this.taskname = taskname;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Float getPercentagecompleted() {
        return percentagecompleted;
    }
    public void setPercentagecompleted(Float percentagecompleted) {
        this.percentagecompleted = percentagecompleted;
    }
    public String getNotes() {
        return notes;
    }
     public void setNotes(String notes) {
        this.notes = notes;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    
    
}
