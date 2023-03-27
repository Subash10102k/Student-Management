package com.example.studentregistration.services;

import java.util.List;

import com.example.studentregistration.model.StudentModel;

public interface StudentService {

	StudentModel createStudent(StudentModel student);

	List<StudentModel> getAllStudents();

	boolean deleteStudent(Long id);

	StudentModel getStudentById(Long id);

	StudentModel updateStudent(Long id, StudentModel student);

}
