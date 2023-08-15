import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Card = ({item,fetchData}) => {


    const navigate = useNavigate();

    const handleDelete = async(id) => {

        const result = await fetch(`http://localhost:5000/api/${id}`,{
            method : "DELETE"
        });

        const ouput = await result.json();

        fetchData();
    }


  return (
    <div className='card'>
      <h2>{item.name}</h2>
      <p>{item.email}</p>
      <p>{item.description}</p>
      <p>{item.phone_number}</p>
      <div className='btn'>
        <Link to={`/${item._id}`}>
          Edit
        </Link>
        <button onClick={() => handleDelete(item._id)}>Delete</button>
      </div>
    </div>
  )
}

export default Card
