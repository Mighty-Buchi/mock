import React, { useEffect, useState } from 'react'
import './DetailsPage.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DetailsPage = () => {

  const { userid } = useParams()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    axios.get('https://dummyjson.com/users/' + userid)
      .then(({ data }) => setUserData(data))
      .catch((err) => console.log(err))
      , []
  })


  return (
    <div className='parent'>
      <div className="head">
        <h1>User details</h1>
        {userData && <div className='pcon'>
          <p><strong>ID:   </strong>{userData.id}</p>
          <p><strong>FIRSTNAME:   </strong>{userData.firstName}</p>
          <p><strong>LASTNAME:   </strong>{userData.lastName}</p>
          <p><strong>AGE:   </strong>{userData.age}</p>
          <p><strong>DOB:   </strong>{userData.birthDate}</p>
        </div>}
        <Link className='btn-main-details' to='/main'>BACK</Link>
      </div>
    </div>
  )
}

export default DetailsPage
