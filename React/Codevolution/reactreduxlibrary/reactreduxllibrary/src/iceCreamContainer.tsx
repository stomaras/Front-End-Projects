import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from './redux/index'

const IceCreamContainer = (props:any) => {
  return (
    <div>
        <h2>Number of ice creams  {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  )
}

const mapStateToProps = (state:any) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)