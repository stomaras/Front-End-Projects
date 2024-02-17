import React, { ElementType } from 'react'

type ContainerProps = {
    as: ElementType,
}

const Container = ({as}: ContainerProps) => {
    const Component = as;
    return <Component>
        
    </Component>
}

export default Container