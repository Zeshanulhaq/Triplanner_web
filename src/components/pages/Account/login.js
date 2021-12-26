import React,{useState,useEffect} from 'react'

import { NavLink, Redirect,useHistory,Route} from 'react-router-dom';
import Navbar from "../Navbar";
import axios from 'axios'
import './login.css'
import signin1 from '../Images/signin1.png'
import bg1 from '../Images/bg1.PNG'

function Login(props) {

    const [auth,setAuth]=useState(false)

    let history=useHistory()
    const [redirect,setRedirect]=useState(4)

    const [user, setuser] = useState([])
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    
    
    useEffect(()=>{
        async function getAllUser(){
            try {
                let userData=await axios.get("http://127.0.0.1:8000/userapi/")
                console.log(userData.data)
                setuser(userData.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllUser()
    },[])

    function clk(){
       
        
        console.log({email,password},'check name and email')
        console.log(user[0].uemail)
        for(let i=0;i<user.length;i++){
            if((user[i].uemail===email) &&(user[i].upassword===password)){
                localStorage.setItem('userID',user[i].id)
                console.log(user[i].id)
                // setRedirect(5)
                history.push("/profile")
                // return <Route exact path='/profile' component={Profile} />   
            }
        }
    }

    return (
        <>
        <Navbar />
        <div style={{backgroundImage:`url(${bg1})`,
        backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',textAlign:'center',
        width:'100vw',height:'100vh'}}
        >
        <div className="main2" >
        <br />
        <div>
        <img src={signin1} style={{width:'150px',marginTop:'10px',marginBottom:'25px'}}/>
        </div>
        <h1 style={{color:'red'}}>USER LOGIN</h1>
        <br />
        <form>
        <input type="text" placeholder="👨‍⚖️Enter Email" class="inpt2" value={email}
            onChange={(e)=>setEmail(e.target.value)}
         />
        <br /> <br />
        <input type="text" placeholder="🔒︎ Enter Password" class="inpt2" value={password}
            onChange={(e)=>setPassword(e.target.value)}
         />
        <br /> <br />
        {/* <NavBtn>
            <NavBtnLink onClick={()=>alert('Login Successfull')} to="/profile">Login</NavBtnLink>
          </NavBtn> */}
          <button className='btn5' type='button' onClick={clk}>LOGIN</button>
          
        </form>
        <br />
        <NavLink to="/officer-login" style={{color:'red',fontWeight:'bold'}}>
        OFFICER LOGIN</NavLink>

        </div>
        </div>
        </>
    )
}

export default Login;