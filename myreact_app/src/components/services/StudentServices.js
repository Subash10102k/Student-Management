import axios from "axios";


const STUDENT_API_BASE_URL ="http://localhost:8080/api/v1/students";

class StudentServices{

    saveStudent(Student){
        return axios.post(STUDENT_API_BASE_URL, Student);
    }

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL + "/" + id);
    }
    getStudentById(id){
        return axios.get(STUDENT_API_BASE_URL + "/" + id);
    }
    updateStudent(Student,id){
        return axios.put(STUDENT_API_BASE_URL + "/" + id , Student);
    }

}


export default new StudentServices();