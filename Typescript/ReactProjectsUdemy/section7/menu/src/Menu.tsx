import React from 'react'
import { Menus } from './data';
import MenuItem from './MenuItem';

export interface MenuProps {
    items: Menus[];
}

const Menu = (props: MenuProps) => {
  return <div className='section-center'>
      {props.items.map((menuItem) => {
          return <MenuItem key={menuItem.id} {...menuItem}/>
      })
    }
    </div>;
}

export default Menu