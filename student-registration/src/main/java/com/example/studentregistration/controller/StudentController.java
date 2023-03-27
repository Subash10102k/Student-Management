package com.example.studentregistration.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentregistration.entity.StudentEntity;
import com.example.studentregistration.model.StudentModel;
import com.example.studentregistration.repository.StudentRepository;
import com.example.studentregistration.services.StudentService;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
	
	@Autowired
	private final StudentService studentService;
	public StudentController(StudentService studentservice) {
		this.studentService =studentservice;
	}
	
	
	@PostMapping("/students")
	public StudentModel createStudent(@RequestBody StudentModel student) {
		
		return studentService.createStudent(student);
		
	}
	
	@GetMapping("/students")
	public List<StudentModel> getAllStudents(){
		

		return studentService.getAllStudents();
		
	}
	
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
		
		boolean deleted = false;
		deleted = studentService.deleteStudent(id);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted" , deleted );
		
		return ResponseEntity.ok(response);
		
	}
	
	@GetMapping("/students/{id}")
	public ResponseEntity<StudentModel> getStudentById(@PathVariable Long id ){
		
		StudentModel student = null;
		student = studentService.getStudentById(id);
		return ResponseEntity.ok(student);
	}
	
	@PutMapping("/students/{id}")
	public ResponseEntity<StudentModel> updateStudent(@PathVariable Long id,
			@RequestBody StudentModel student){
		
		student = studentService.updateStudent(id,student);
		return ResponseEntity.ok(student);
	}
	

}
