import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Render from '../components/Render'
import './style.css'

const ExA = () => {

    const [data, editData] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos')
      const dataRes = await data.json();
      await editData(dataRes);
    }

  return (
    <ul className='mainList'>
      {
        data.map((d) => {
          return (
            <Render userId={d.userId} id={d.id} title={d.title} completed={d.completed} />
          )
        })
      }
    </ul>
  )
}

export default ExA