package com.example.studentregistration.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.example.studentregistration.entity.StudentEntity;
import com.example.studentregistration.model.StudentModel;
import com.example.studentregistration.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
	
	private StudentRepository studentRepository;
	
	public StudentServiceImpl(StudentRepository studentRepository) {
		
		this.studentRepository = studentRepository;
	}

	@Override
	public StudentModel createStudent(StudentModel studentModel) {
		StudentEntity studentEntity = new StudentEntity();
		BeanUtils.copyProperties(studentModel , studentEntity);
	    studentRepository.save(studentEntity);
		return studentModel;
	}

	@Override
	public List<StudentModel> getAllStudents() {
		List<StudentEntity> studentEntities = studentRepository.findAll();
		
		
		List<StudentModel> students = studentEntities
				.stream().
				map(std -> new StudentModel(
						std.getId(),
						std.getFirst_name(),
						std.getLast_name(),
						std.getGender(),
						std.getCourse(),
						std.getAddress(),
						std.getState())).collect(Collectors.toList());
		
	
		return students;
	}

	@Override
	public boolean deleteStudent(Long id) {
		StudentEntity students = studentRepository.findById(id).get();
		studentRepository.delete(students);
		return true;
	}

	@Override
	public StudentModel getStudentById(Long id) {
		StudentEntity studentEntity = studentRepository.findById(id).get();
		StudentModel student = new StudentModel();
		BeanUtils.copyProperties(studentEntity, student);
		
		
		return student;
	}

	@Override
	public StudentModel updateStudent(Long id, StudentModel student) {
		StudentEntity studentEntity = studentRepository.findById(id).get();
		studentEntity.setAddress(student.getAddress());
		studentEntity.setCourse(student.getCourse());
		studentEntity.setFirst_name(student.getFirst_name());
		studentEntity.setGender(student.getGender());
		studentEntity.setLast_name(student.getLast_name());
		studentEntity.setState(student.getState());
		
		studentRepository.save(studentEntity);
		return student;
	}

	

	
	
	

}
