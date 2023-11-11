import React from 'react'
import './style.css'
import { useEffect, useState } from 'react'
import axios from "axios"

const ListCar = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        handleGetList();
    }, []);

    const handleGetList = () => {
        axios
            .get("https://api-car-rental.binaracademy.org/customer/v2/car?")
            .then((res) =>{setUsers(res.data.cars)})
            .catch((err) => console.log(err));
    };
    
    return (
        <div className='listcar'>
            <h1>hai</h1>
            {users.map(item => (
                <div>
                    <h1>{item.name}</h1>
                    <img className='listcar-img' src={item.image}/>
                </div>
            ))}
        </div>
    );
}

export default ListCar;