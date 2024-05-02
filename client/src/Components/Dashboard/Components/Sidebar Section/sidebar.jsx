import React from 'react'
import './sidebar.css'
import '../../../../App.css'
import img from '../../../../asset/bonny.png'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophyFill } from "react-icons/bs";



const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={img} alt="Image name" className='img3' />
        <h2>Hinga.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="className">
            <a href="#" className='menuLink flex'>
            <IoMdSpeedometer className='icon'/>
            <span className='smallText'>
              Dashboard
            </span>
               
            </a>
          </li>

          <li className="className">
            <a href="#" className='menuLink flex'>
            <MdDeliveryDining className='icon'/>
            <span className='smallText'>
             My Orders
            </span>

           
              
            </a>
          </li>

          <li className="className">
            <a href="#" className='menuLink flex'>
            <MdOutlineExplore className='icon'/>
            <span className='smallText'>
           Explore
            </span>
           
              
            </a>
          </li>

         <li className="className">
            <a href="#" className='menuLink flex'>
            <BsTrophyFill className='icon'/>
            <span className='smallText'>
            Products
            </span>
           
              
            </a>
          </li>

        </ul>

      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="className">
            <a href="#" className='menuLink flex'>
            <IoMdSpeedometer className='icon'/>
            <span className='smallText'>
        Charts
            </span>
               
            </a>
          </li>

          <li className="className">
            <a href="#" className='menuLink flex'>
            <MdDeliveryDining className='icon'/>
            <span className='smallText'>
            Trends
            </span>

           
              
            </a>
          </li>

          <li className="className">
            <a href="#" className='menuLink flex'>
            <MdOutlineExplore className='icon'/>
            <span className='smallText'>
           Explore
            </span>
           
              
            </a>
          </li>

         <li className="className">
            <a href="#" className='menuLink flex'>
            <BsTrophyFill className='icon'/>
            <span className='smallText'>
            Trends
            </span>
           
              
            </a>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Sidebar