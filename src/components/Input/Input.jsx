import { forwardRef, useImperativeHandle, useRef } from "react"
import "./Input.css"

 export default function Input({className, type, placeholder, onChange, id}){
     return(
         <input className={className} type={type} placeholder={placeholder} onChange={onChange} id={id}/>
     );
 }
/*-----------------------------trying imperative handle and useRef----------------------------------------------------------------------*/
/*
const Input = forwardRef(({className, type, placeholder, onChange, id}, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focusInput:() =>{
            inputRef.current.focus()
        },
        assignText:() => {
            inputRef.current.value = "Hello World"
        },
        TextColor:() =>{
            inputRef.current.style.color = "orange"
        }
    }))
        return(
        <input ref={inputRef} className={className} type={type} placeholder={placeholder} onChange={onChange} id={id}/>
    );
})

export default Input

*/