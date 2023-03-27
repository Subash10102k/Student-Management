
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/services/Login';
import AddStudent from './components/AddStudent';
import NaveBar from './components/NaveBar';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
  <>
  <BrowserRouter>  
  <NaveBar />

  <Routes>
     <Route index element={<StudentList />} />  
     <Route  path="/" element={<StudentList />}></Route>
    <Route path="/studentList" element={<StudentList />} />
    <Route path="/addStudent"  element={<AddStudent/>} />
    <Route path="/editStudent/:id" element={<UpdateStudent/>} />

  </Routes>

  </BrowserRouter>
  
  </>
  );

}

export default App;
