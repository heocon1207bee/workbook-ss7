import React from 'react'
import './style.css'

const Render2 = ({id, name, username, email, address, phone, website, company}) => {
  return (
    <li key={id} className='dataList'>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <p>
            address:
            <ul>
                <li>&nbsp;street: {address.street}</li>
                <li>suite: {address.suite}</li>
                <li>city: {address.city}</li>
                <li>zipcode: {address.zipcode}</li>
                <li>
                    geo:
                    <ul>
                        <li>lat: {address.geo.lat}</li>
                        <li>lng: {address.geo.lng}</li>
                    </ul>
                </li>
            </ul>
        </p>
        <p>phone: {phone}</p>
        <p>website: {website}</p>
        <p>
            company:
            <ul>
                <li>name: {company.name}</li>
                <li>catchPhrase: {company.catchPhrase}</li>
                <li>bs: {company.bs}</li>
            </ul>
        </p>
    </li>
  )
}

export default Render2