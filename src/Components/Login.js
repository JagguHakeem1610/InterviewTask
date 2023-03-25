import { Center, space } from '@chakra-ui/react';
import {React,useState,useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export const Login = (props) => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const { authState, loginUser } = useContext(AuthContext);
    const [loginsubmit,setLoginsubmit]=useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginsubmit(true);
        try {
          let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          });
          res = await res.json();

          loginUser(res.token);
          console.log(res.token)
        } catch (error) {
          console.log(`Error found:`, error);
        }
      };
      if (authState.isAuth) {
        return <Navigate to="/home" />;
      }



  return(
    <div style={{display:'flex',margin:'',justifyContent:'space-evenly'}}>
        
        <div style={{margin:'auto'}}>
        <form  onSubmit={handleSubmit} className="form">
        <div>
          <label>
            
            Email Address :
          </label>
            <input style={{margin:'10px',width:'300px',border:'2px solid black',borderRadius:'7px',padding:'7px'}}
             
             
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
        </div>
        <div>
          <label>
         Password : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
            <input style={{margin:'18px',width:'300px',border:'2px solid black',borderRadius:'7px',padding:'7px'}}
             
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
        </div>
        <div>
            <div> <input
           disabled={loginsubmit}
           style={{margin:'10px',width:'420px',color:'white',backgroundColor:'teal',border:'2px solid black',borderRadius:'7px',padding:'7px'}}
            type="submit"
            value="LOGIN"
          /></div>OR
            <div> <input
           
           style={{margin:'10px',width:'420px',color:'white',backgroundColor:'teal',border:'2px solid black',borderRadius:'7px',padding:'7px'}}
           type='button'
           value="SIGN UP"
          /></div>
         
        </div>
      </form>
      </div>
      <div ><img
            src="https://png.pngtree.com/png-vector/20200410/ourmid/pngtree-online-shopping-concept-for-landing-page-or-e-commerce-site-png-image_2181567.jpg"
            alt="Girl in a jacket"
            width="700"
            height="700"
          /><img src=""/></div>
    </div>
   )

 }