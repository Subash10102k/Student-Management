import React, { useState,useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import StudentServices from './services/StudentServices';

const UpdateStudent = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [Student,setStudent]=  useState({
        id:id,
        first_name:"",
        last_name:"",
        course:"",
        gender:"",
        address:"",
        state:"",

    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setStudent({...Student, [e.target.name] : value});
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await StudentServices.getStudentById(id);
                
                    setStudent(response.data);
                  
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    
    }, [id]);
    

    const updateStudent =(e) => {
        e.preventDefault();
        StudentServices.updateStudent(Student , id).then((response) => {
            navigate("/studentList");
        }).catch((error) => {
            console.log(error)
        });

        
    };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
        <div className="font-semibold text-2xl tracking-wider">
            <h1>Update Student</h1>
        </div>
        <div className="items-center  justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">First Name</label>
            <input type="text" name="first_name" value={Student.first_name}
            onChange={(e) => handleChange(e)}
             className="h-10 w-96 border mt-2 px-2 py-2 "></input>
        </div>
        <div className="items-center  justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Last Name</label>
            <input type="text" name="last_name" value={Student.last_name} 
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 "></input>
        </div>
        <div className="items-center  justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Course</label>
            <input type="text" name="course" value={Student.course} 
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 "></input>
        </div>
        
        <div className="items-center  justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Gender</label>
            <input type="text" name="gender" value={Student.gender} 
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 "></input>
        </div>
        <div className="items-center  justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Address</label>
            <input type="text" name="address" value={Student.address} 
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 "></input>
        </div>
        <div className="items-center  justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">State</label>
            <input type="text" name="state" value={Student.state} 
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 "></input>
        </div>
        <div className="items-center  justify-center h-14 w-full my-4 space-x-4 p-t-4">
            <button onClick={updateStudent} className="rounded font-semibold bg-blue-500 hover:bg-blue-600 mt-2 py-2 px-6">
                Update
                </button>
            <button 
            onClick={() => navigate("/studentList")}
            
            className="rounded font-semibold bg-red-500 hover:bg-red-600  py-2 px-6">
                cancel
                </button>
        </div>
        

    </div>
</div>
  );
}

export default UpdateStudent