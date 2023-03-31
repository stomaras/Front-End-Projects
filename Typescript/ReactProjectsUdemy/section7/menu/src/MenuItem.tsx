import React from 'react'

export interface MenuItemProps {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}

const MenuItem = (props: MenuItemProps) => {
  return (
      <article className='menu-item'>
          <img src={props.img} alt={props.title} className="img" />
          <div className="item-info">
              <header>
                  <h5>{props.title}</h5>
                  <span className="item-price">${props.price}</span>
              </header>
              <p className='item-text'>{props.desc}</p>
          </div>
    </article>
  )
}

export default MenuItem