import { forwardRef } from "react";

const CustomInput = (props, ref) => {
    return <input ref={ref} {...props} className="text-input"/>
};

export const Input = forwardRef(CustomInput);