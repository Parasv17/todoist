import React from 'react'

export default function Header() {
  return (
    <div className="navbar text-gray-900 flex space-x-3  items-center h-[10vh] bg-white relative">
      <div className="logo px-12 text-[20px] font-medium leading-loose absolute z-0">
        RateMyProf Logo
      </div>

      <div className="logins flex space-x-1 absolute right-10 z-0">
        <div className="signup text-gray-900 text-[16px] font-semibold leading-normal bg-neutral-100 w-36 h-12 flex items-center justify-center rounded-[38px]" >
          <button  className="">Sign Up</button>
        </div>
        <div className="signin text-white text-[16px] font-semibold leading-normal w-36 h-12 flex items-center justify-center bg-gray-900  rounded-[38px] ">
          <button className="">Sign In</button>
        </div>
      </div>
    </div>
  )
}
