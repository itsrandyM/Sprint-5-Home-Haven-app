import React from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import './forms.css'

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-green-eta.vercel.app/login', loginData);
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/')
      }
    } catch (error) {
      alert('Invalid email or password. Please try again.');
    }
  };

    return (
        <div className="Login">
         <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
         </div>
         
          <form  className="Thisform" >
          <h3>Log in</h3>


           <label htmlFor="email">Email</label>
            <input type="email" 
            name="email" 
            placeholder="emails@email.com"
            value={loginData.email}
            onChange={handleChange}
            />


            <label htmlFor="password">Password</label>
            <input type="password" 
            name="password" 
            placeholder="password"
            value={loginData.password}
            onChange={handleChange}
            />
            
            <button className="add" onClick={handleLoginSubmit}>LogIn</button>
            <p className="adds">Dont have an account? <Link className="lnk" to={'/signup'} > Sign Up</Link> </p>
          </form>

        </div>
    )
}
export default Login