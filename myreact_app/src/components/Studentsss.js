import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Studentssss = ({Student , deleteStudent}) => {
    const navigate = useNavigate();
    const editStudent = (e,id) => {
        e.preventDefault();
        navigate (`/editStudent/${id}`);
    };


  return (
    <tr key={Student.id}>
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800">{Student.first_name}</div>  </td>
        
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800">{Student.last_name}</div>  </td>
        
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800">{Student.course}</div>  </td>
        
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800">{Student.gender}</div>  </td>
        
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800">{Student.address}</div>  </td>
        
    <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800">{Student.state}</div>  </td>
        
    <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
        
        onClick={(e,id) => editStudent(e, Student.id)}
        
        className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
        <a
         onClick={(e,id) => deleteStudent(e, Student.id)}
         className="text-indigo-600 hover:text-indigo-800  hover:cursor-pointer ">Delete</a>
        
    </td>
        
    
</tr>
  )
};

export default Studentssss;


