import React from 'react'
import Card from '../UI/Card'
import "./ProductItem.css"
import { useDispatch } from 'react-redux';
import { toggleFav } from '../../store/reducers/productsReducer';
import { useAppDispatch } from '../../store';

export interface ProductItemProps {
    id:any;
    title:string;
    description:string;
    isFav:boolean;
}

const ProductItem = (props:ProductItemProps) => {

    const dispatch = useAppDispatch();
    
    const handleFavHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(props.id);
        
        dispatch(toggleFav(props.id));
    }
  
    return (
    <Card style={{marginBottom:'1rem'}}>
        <div className='product-item'>
            <h2 className={props.isFav ? 'is-fav':''}>{props.title}</h2>
            <p>{props.description}</p>
            <button
                className={!props.isFav ? 'button-outline':''}
                onClick={handleFavHandler}
            >
                {props.isFav ? 'Un-Favorite':'Favorite'}
            </button>
        </div>
    </Card>
    
  )
}

export default ProductItem