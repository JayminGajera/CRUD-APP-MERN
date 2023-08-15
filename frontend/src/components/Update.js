import React,{useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom"

const Update = () => {

    const {id} = useParams();    

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
  
    const getSingleList = async() => {
        
        const response = await fetch(`http://localhost:5000/api/${id}`);

        const result = await response.json();
        console.log(result);

        setFormData({
            name:result?.response?.name,
            email:result?.response?.email,
            phone_number:result?.response?.phone_number,
        });
    }

    useEffect(() => {
        getSingleList();
    },[]);

    const handleUpadate = async(e) => {
        e.preventDefault();

    
        const input =await  fetch(`http://localhost:5000/api/${id}`,{
        method:"PUT",
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
        <form className='form-1' onSubmit={handleUpadate}>
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

export default Update
