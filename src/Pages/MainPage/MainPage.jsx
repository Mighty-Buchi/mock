import React, { useEffect, useState } from 'react'
import './MainPage.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const MainPage = () => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    const [records, setRecords] = useState([]);

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    const Details = (id) => {
        console.log(id)
        navigate('/user/details/' + id)
    }

    const Filter = (e) => {
        setRecords(user.filter(f => f.firstName.toLowerCase().includes(e.target.value)))
    }

    useEffect(() => {
        setLoading(true);
        axios.get('https://dummyjson.com/users')
            .then(({ data }) => {
                console.log(data.users)
                setUser(data.users)
                setRecords(data.users)

            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='main-con'>
            <div className='main-head'>
                <input className='input' type="text" onChange={Filter} placeholder='Enter Firstname' />
                <button onClick={handleLogout}>Logout</button>
            </div>
            <table className='tabledata'>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>DETAILS</th>

                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={3}>Loading...</td>
                        </tr>
                    ) : (records.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td><button className='btn-main' onClick={() => Details(user.id)}>view info</button></td>

                        </tr>
                    ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MainPage
