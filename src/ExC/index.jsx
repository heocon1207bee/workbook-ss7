import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Render2 from '../components/Render2'
import './style.css'

const ExC = () => {

    const [data, editData] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const dataRes = await data.json();
      await editData(dataRes);
    }

  return (
    <ul className='mainList'>
      {
        data.map((d, index) => {
          return (
            <Render2 key={index} id={d.id} name={d.name} username={d.username} email={d.email} address={d.address} phone={d.phone} website={d.website} company={d.company}/>
          )
        })
      }
    </ul>
  )
}

export default ExC