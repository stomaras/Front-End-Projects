import React from "react";
import avatar  from "../src/images/avatar.webp";

export function Person({ name, nickName='tom', images }: any) {
    
    const img = images?.[0]?.small?.url || avatar;

    return <div>
        <img src={img} alt={name} style={{width:'50px'}} />
        <h4>{name}</h4>
        <p> NickName : {nickName}</p>
  </div>;
}


  