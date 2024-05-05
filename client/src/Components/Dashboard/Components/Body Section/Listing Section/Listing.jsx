import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See all <BsArrowRightShort className='icon'/>
        </button>

      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src="" alt="Image name" />
        </div>
      </div>



    </div>
  )
}

export default Listing