package com.example.studentregistration.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentModel {
	
	public StudentModel(long id2, String first_name2, String last_name2, String gender2, String course2,
			String address2, String state2) {
		this.id = id2;
		this.first_name = first_name2;
		this.last_name = last_name2;
		this.gender = gender2;
		this.course= course2;
		this.address=address2;
		this.state=state2;
		
		
	}
	public StudentModel() {
		// TODO Auto-generated constructor stub
	}
	private long id;
	private String first_name;
	private String last_name;
	private String course;
	private String gender;
	private String address;
	private String state;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

}
