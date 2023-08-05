import React from "react"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './forms.css'


const Signup = () => {
  
  const history = useNavigate()

  const [signUp, setSignUp] = React.useState({
    username:'',
    email:'',
    password:'',
  })
   
  const [error, setError] = React.useState('')

  const handleChange = (e) => {
    setSignUp({...signUp,[e.target.name]: e.target.value})
  console.log(signUp)
}


  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await axios.post('https://backend-green-eta.vercel.app/signup', signUp)
      if(response.status === 201) {
        alert('Sign up successful! Please login.')
        history.push('"https://backend-green-eta.vercel.app/login')
      }
    }
    catch(error){
      if(error.response && error.response.data.error){
        setError(error.response.data.error)
      } else {
        setError('Error signing up. please try again.')
      }
    }
  }


    return (
        <div className="Signup">
         <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
         </div>
         
          

          
          <form className="Thisform" onSubmit={handleSubmit} >
          <h3>Sign Up</h3>
            
            <label htmlFor="username">Username</label>
            <input type="text" 
            name="username" 
            placeholder="Username"
            value={signUp.username}
            onChange={handleChange}
            />


            <label htmlFor="email">Email</label>
            <input type="email" 
            name="email" 
            placeholder="emails@email.com"
            value={signUp.email}
            onChange={handleChange}
            />


            <label htmlFor="password">Password</label>
            <input type="password" 
            name="password" 
            placeholder="password"
            value={signUp.password}
            onChange={handleChange}
            />
            
            <button style={{backgroundColor: "blue"}} type="submit">Sign Up</button>
            <p className="follow">Kindly <Link className="linkk" to={'/login'}> Log in</Link> after signing up</p>
          </form>

          {error && <span>{error}</span>}
        </div>
    )
}
export default Signup