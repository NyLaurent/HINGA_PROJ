import React from 'react'
import './top.css'
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircleShare } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import pic from '../../../../../asset/lanez.png'
import vid from '../../../../../LoginAssets/video.mp4'
import { BsArrowRightShort } from "react-icons/bs";
import epic from "../../../../../asset/ice.png"

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Hinga .</h1>
          <p>Hello Farmer, Welcome back !</p>
        </div>

        <div className="searchBar flex">
          <input type="text"  placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
        <TbMessageCircleShare className='icon'/>
        <MdNotificationsNone className='icon'/>
        <div className="adminImage">
          <img src={pic} alt="Admin's Image" />

        </div>


        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The worlds's fast growing industry today are natural made products</p>


          <div className="buttons2 flex">
            <div className="btn">Explore More</div>
            <button className='btn2 transparent'>Top Sellers</button>



          </div>
          <div className="videoDiv">
            <video src={vid} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex" >
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This month <br /> <small>175 Orders</small>
                </span>
              </div>
              <span className='flex link'>
                Go to my orders  <BsArrowRightShort className='icon'/>


              </span>
              
               
            






            </div>



            <div className="imgDiv">
              <img src={epic} alt="Image name" />
            </div>
{/* 
            <div className="sideBarCard">
      <BsQuestionCircle className='icon'/>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle1"></div>


        <h3>Help Center</h3>
        <p>Having trouble in Planti, please contact us from for more
          questions.
        </p>
        <button className='btn'>Go to help center</button>


      </div>

      </div> */}


          </div>
        </div>





      </div>
    </div>
  )
}

export default Top