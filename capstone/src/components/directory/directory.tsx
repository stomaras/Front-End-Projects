import React from 'react'
import Category from '../category-item/category'
import { Cat } from '../../models/models';
export interface DirectoryProps {
    categories:Cat[];
}

const Directory = (props:DirectoryProps) => {
    const {categories} = props;
  return (
    <div className='categories-container'>
            {categories.map((category) => {
                return (
                    <Category title={category.title} image={category.image} id={category.id}/>
                )
            })

            }
    </div>
  )
}

export default Directory