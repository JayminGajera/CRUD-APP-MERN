import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Form = () => {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone_number:'',
  });

  const changeHandler = (e) => {
   setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
   }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const input =await  fetch('http://localhost:5000/api/add-record',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    });

    const result = await input.json();

    setFormData({
      name:'',
      email: '',
      phone_number:'',
    });

    navigate('/');

  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} className='form-1'>
        <div>
          <label>Name :</label>
          <input type="text" placeholder='Enter Your Name' name='name' value={formData.name} onChange={changeHandler}/>
        </div>
        <div>
          <label>Email :</label>
          <input type="email" placeholder='example@gmail.com' name='email' value={formData.email} onChange={changeHandler}/>
        </div>
        <div>
          <label>Mobile no :</label>
          <input type="number" placeholder='Enter Your Number' name='phone_number' value={formData.phone_number} onChange={changeHandler}/>
        </div>
        
        <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default Form
