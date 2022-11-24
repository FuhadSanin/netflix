import { useState ,useContext} from 'react';
import Navabar from '../../Navabar';
import { FirebaseContext } from '../../../../store/Context';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Logincompoent() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert('Loged in')
      navigate('/')
    }).catch(error=>{
      const error1=alert(error.message)
    })

  }
  return (
    <div>
      <Navabar/>
    <div className="signupParentDiv">
  <img src={require('./N.png')}></img>
  <form onClick={handleSubmit}  >
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
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      id="lname"
      name="password"
      placeholder="Password"
    />
    <br />
    <br />
    <button>Login</button>

  </form>
  <br/>
  <label className='new-account' onClick={()=>{
    navigate('/signup')
  }}>Don't have an account ?</label>
</div>


</div>
  )
}

export default Logincompoent
