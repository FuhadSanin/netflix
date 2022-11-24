import React,{useContext} from 'react';
import './Navbar.css';
import { Outlet,Link } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

const Navabar = () => {
    const {firebase}=useContext(FirebaseContext)
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    return (
        <div className='Navbar'>
            
            <div className="left">
               <a href="/"><img className='Main_logo' src={require("./Netflix.png")} /></a> 
            </div>
            <div className="right">
                    <nav>
                        <label><Link className='link' to='/'>Home</Link></label>
                        <label><Link className='link'  to='/signup'>Signup</Link></label>
                        <label><Link className='link' to='/login'>{user ? `HEY , ${user.displayName}` :"Login"}</Link></label>
                      { user && <button className='logout' onClick={()=>{
                            firebase.auth().signOut().then(()=>{
                                navigate('/login')
                            })
                        }}>Logout</button> }
                </nav>
            <Outlet/>
            </div>

            
        </div>
    );
}

export default Navabar;
