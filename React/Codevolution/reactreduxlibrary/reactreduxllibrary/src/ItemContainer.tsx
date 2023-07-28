import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from './redux'

const ItemContainer = (props:any) => {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state:any, ownProps:any) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()): () => dispatch(buyIceCream())

    return {
      buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)