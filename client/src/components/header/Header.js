import React from 'react'
import Navigation from '../navigation/Navigation'

export default function Header () {
  return (
    <div>
      <span> Header </span>
      <Navigation />
      <span> Logo </span>
      <span> Search </span>
      <span> Account </span>
      <span> cart </span>
    </div>
  )
}