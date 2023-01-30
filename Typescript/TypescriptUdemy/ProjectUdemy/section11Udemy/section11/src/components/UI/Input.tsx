import classes from "./Input.module.css";

export const Input = (props:any) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
}