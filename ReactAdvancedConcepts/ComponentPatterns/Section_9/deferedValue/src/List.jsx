import React, { useEffect } from 'react'
import { useMemo, useDeferredValue } from 'react'

const List = ({input}) => {
    const LIST_SIZE = 20000
    // this input value is of low priority 
    const deferredInput = useDeferredValue(input)
    const list = useMemo(() => {
        const l  = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    },[deferredInput])

    useEffect(() => {
        console.log(`Input: ${input}\n Deffered: ${deferredInput}`);
    },[input, deferredInput])

  return list
}

export default List