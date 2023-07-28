import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux/index'
import { useState } from 'react'

const NewCakeContainer = (props:any) => {
    const [number, setNumber] = useState<HTMLInputElement | any>(1);
  return (
    <div>
        <h2>Number of Cakes  {props.numOfCakes}</h2>
        <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={props.buyCake(number)}>Buy {number} cake</button>
    </div>
  )
}

const mapStateToProps = (state:any) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        buyCake: (number:any) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)