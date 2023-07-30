package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String projectName;
	private String projectDescription;
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")

	private LocalDate projectStartDate;
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDate projectEndDate;

	@JsonIgnoreProperties("project")
	@OneToMany(mappedBy = "project",cascade = CascadeType.ALL)
	private List<Task> taskList;


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public LocalDate getProjectStartDate() {
		return projectStartDate;
	}

	public void setProjectStartDate(LocalDate projectStartDate) {
		this.projectStartDate = projectStartDate;
	}

	public LocalDate getProjectEndDate() {
		return projectEndDate;
	}

	public void setProjectEndDate(LocalDate projectEndDate) {
		this.projectEndDate = projectEndDate;
	}


	public List<Task> getTaskList() {
		return taskList;
	}

	public void setTaskList(List<Task> taskList) {
		this.taskList = taskList;
	}

	public Project(long projectId, String projectName, String projectDescription, LocalDate projectStartDate,
			LocalDate projectEndDate, List<Task> taskList) {
		super();
		this.id = projectId;
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectStartDate = projectStartDate;
		this.projectEndDate = projectEndDate;
		this.taskList = taskList;
	}

	public Project() {
		super();
	}

	@Override
	public String toString() {
		return "Project [projectId=" + id + ", projectName=" + projectName + ", projectDescription="
				+ projectDescription + ", projectStartDate=" + projectStartDate + ", projectEndDate=" + projectEndDate
				+ ", taskList=" + taskList + "]";
	}
	
	
	

}