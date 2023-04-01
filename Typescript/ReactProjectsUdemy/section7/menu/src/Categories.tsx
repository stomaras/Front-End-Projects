import React from 'react'

export interface CategoriesProps {
    categories: string[];
    filterItems(category:string):void;
}

const Categories = (props:CategoriesProps) => {
  return (
      <div className='btn-container'>
          {
              props.categories.map((category) => {
                  return <button type='button' className='btn' key={category} onClick={()=>props.filterItems(category)}>{category}</button>
              })
          }
    </div>
  )
}

export default Categories