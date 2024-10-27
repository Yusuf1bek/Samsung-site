import React from 'react'
import "./main.css"

const Main = ({title,navbarItems,image,subTitle,desc,btn}) => {
    const items = navbarItems.map((item) => (
        <li>
          <a className='link-item' href="">{item}</a>
        </li>))
  return (
    <div className='wrapper'>
        <h2 className='main-title'>{title}</h2>
        <ul className='main-list'>
            {items}
        </ul>
        <img className='img-main' src={image} alt={title} width={800} height={400} />
        <h3 className='main-subtitle'>{subTitle}</h3>
        <p className='main-text'>{desc}</p>
        <button className='main-btn'>{btn}</button>
    </div>
  )
}

export default Main