import React from 'react'
import c from './OnOff.module.css'


// export const OnOff = (props: PropsType) => {
//     return (
//         <div>
//             <button className={c.buttonOn}>On</button>
//             <button className={c.buttonOff}>Off</button>
//             <button className={c.circle}/>
//         </div>
//     )
// }

export const OnOff = (props : PropsType) => {

    const circle = {
        height: "20px",
        width: "20px",
        border: "1px solid black",
        borderRadius : "50px",
        marginLeft: "15px",
        display: "inline-block",
        marginTop: "50px",
        backgroundColor: props.value ? "green" : "red"
}
    const buttonOff = {
        height: "40px",
        width: "70px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.value ? "white" : "red"
    }
    const buttonOn = {
        height: "40px",
        width: "70px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor : props.value ? "green" : "white"
    }
return (
    <div>
        <div style={buttonOn}>On</div>
        <div style={buttonOff}>Off</div>
        <div style={circle}></div>
    </div>
)

}



type PropsType = {
    value: boolean
}