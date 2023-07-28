import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './redux'

const HooksCakeContainer = () => {
   const numOfCakes = useSelector((state:any) => state.cake.numOfCakes)
   const dispatch =  useDispatch()
  return (
    <div>
        <h2>Num of Cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(buyCake())}>Buy cake action</button>
    </div>
  )
}

export default HooksCakeContainer