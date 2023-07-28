import React from 'react'
import { connect } from 'react-redux'

const ItemContainer = (props:any) => {
  return (
    <div>
        <h2>Item - {props.item}</h2>
    </div>
  )
}

const mapStateToProps = (state:any, ownProps:any) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer)