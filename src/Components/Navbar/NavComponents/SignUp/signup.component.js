import { useState ,useContext} from 'react';
import './Signup.css';
import Navabar from '../../Navabar';
import { FirebaseContext } from '../../../../store/Context';
import {Link,useNavigate} from 'react-router-dom'




function Signupcomponent() {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then((result)=>{
        firebase.firestore().collection('users').add({
          username:username,
          phone:phone,
        }).then(()=>{
          navigate('/login')          
        })
      })
    })
 }

  return (
    <div>
      <Navabar/>
    <div className="signupParentDiv">
  <img src={require('./N.png')}></img>
  <form onSubmit={handleSubmit} >
    <br />
    <input
      className="input"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      type="text"
      id="fname"
      name="name"
      placeholder="Username"
    />
    <br />
    <br />
    <input
      className="input"
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      id="fname"
      name="email"
      placeholder="Email"
    />
    <br />
    <br />
    <input
      className="input"
      type="text"
      id="lname"
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      name="phone"
      placeholder="Phone"
    />
    <br />
    <br />
    <input
      className="input"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      id="lname"
      name="password"
      placeholder="Password"
    />
    <br />
    <br />
    <button>Signup</button>
  </form>
  <Link className='login' to='/login'> Already have an account</Link>
</div>


</div>
  )
}

export default Signupcomponent
