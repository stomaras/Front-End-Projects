import React from 'react'
import { IMenu } from './data';
import MenuItem from './MenuItem';

interface MenuProps {
    menuItems: IMenu[];
}

const Menu = (props: MenuProps) => {
    const {menuItems} = props;
  return (
    <div className="section-center">
        {menuItems.map((menuItem) => {
            return <MenuItem menu={menuItem} />
        })}
    </div>
  )
}

export default Menu