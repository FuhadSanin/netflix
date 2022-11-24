import React,{useEffect,useContext} from 'react';
import { FirebaseContext,AuthContext } from './store/Context';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './Components/Navbar/NavComponents/SignUp/signup.component';
import Logincompoent from './Components/Navbar/NavComponents/Login/login.compoent';
 
function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
    })


  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="/signup" element={<SignUp/> }/>
          <Route path='/login' element={<Logincompoent/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
