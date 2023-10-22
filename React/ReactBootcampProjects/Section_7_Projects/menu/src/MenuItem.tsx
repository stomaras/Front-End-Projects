import React from 'react'
import { IMenu } from './data'

interface MenuItemProps {
    menu:IMenu
}

const MenuItem = (props: MenuItemProps) => {
    const {menu} = props;
  return (
    <article key={menu.id} className='menu-item'>
        <img src={menu.img} alt={menu.title} className='img' />
        <div className="item-info">
            <header>
                <h5>{menu.title}</h5>
                <span className="item-price">${menu.price}</span>
            </header>
        </div>
    </article>
  )
}

export default MenuItem