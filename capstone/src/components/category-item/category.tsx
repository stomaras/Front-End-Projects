import React from 'react'
import "./category.styles.scss";


export interface CategoryProp {
    title:string;
    image:string;
    id:number;
}

const Category = (props:CategoryProp) => {
    const {title, image, id} = props;
  return (
        <div className='category-container' key={id}>
              <div className='background-image' style={{
                backgroundImage:`url(${image})`,
              }}/>
              <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop now</p>
              </div>
        </div>
  )
}

export default Category