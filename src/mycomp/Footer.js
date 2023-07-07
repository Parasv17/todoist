import React from 'react'

export default function Footer() {
  let styleFooter ={
    position: "relative",
    top:"100vh",
    bottom:"0vh",
    width: "100%",
    marginTop:"2vh",
    height:"5vh",
    marginBottom:"0px"

  }
  return (
    <div className="bg-dark text-light " style={styleFooter}>
      <p className='text-center py-2'>WhatEver Comes in @Footer</p>
    
  </div>
  )
}
