import React from 'react'
import SingleColor from "./SingleColor"
import {nanoid} from "nanoid";

export interface ColorListProps {
    colors:any
}

export interface IColor {
    alpha:number;
    rgb:number[];
    type:string;
    weight:number;
}

const ColorList = (props: ColorListProps) => {

    const {colors} = props;
  return (
    <section>
        {colors.map((color:IColor) => {
            return <SingleColor key={nanoid()} color={color}/>
        })};
    </section>
  )
}

export default ColorList