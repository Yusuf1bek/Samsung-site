import React from 'react'
import "./header.css"
import LogoImg from "../../assets/images/logo.svg"
import { CiSearch,CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const navbarItems = ["Shop","AI","Mobile","TV & Audio","Apliances","Computing","Displays","Accessories","SmartThings","Explore","Support","For Business",]

const Header = () => {
  const items = 
    navbarItems.map((item, ind) => (
      <li className='header-item'>
        <a key={ind} href="">{item}</a>
      </li>
    ))
  return (
    <div className='container'>
      <header className='header'>
              <a  href="#">
                <img className='logo-img' src={LogoImg} alt="Logo-Img"  width={120} height={32}/>
              </a>
            <ul className='header-list'>
              {items}
              <div className='icon-wrapper'>
                <a href="">
                  <CiSearch/>
                </a>
                <a href="">
                  <CiShoppingCart/>
                </a>
                <a href="">
                  <IoPersonOutline/>
                </a>
              </div>
            </ul>
      </header>
    </div>
  )
}

export default Header