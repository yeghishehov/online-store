import React from 'react'
import { Link } from 'react-router-dom'
import { links } from './links' 

export default function Navigation () {
  return (
    <span>
      {
        links.map(link => (
          <Link 
            key={link.text}
            to={link.route}
          >
            {link.text}
          </Link>
        ))
      }
    </span>
  )
}