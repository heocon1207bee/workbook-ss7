import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Render from '../components/Render'
import './style.css'

const ExB = () => {

    const [data, editData] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      const dataRes = await data.json();
      await editData(dataRes);
    }

  return (
    <ul className='mainList'>
      {
        data.map((d, index) => {
          return (
            <Render key={index} userId={d.userId} id={d.id} title={d.title} body={d.body}/>
          )
        })
      }
    </ul>
  )
}

export default ExB