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

export const OnOff1 = (props: PropsType) => {
    if (props.value) {
        return (
            <div>
                <button className={`${c.buttonOn} ${c.buttonValueTrue}`}>On</button>
                <button className={c.buttonOff}>Off</button>
                <button className={`${c.circle} ${c.buttonValueTrue}`}/>
            </div>
        )
    } else {
        return (
            <div>
                <button className={c.buttonOff}>On</button>
                <button className={`${c.buttonOff} ${c.buttonValueFalse}`}>Off</button>
                <button className={`${c.circle} ${c.buttonValueFalse}`}/>
            </div>
        )
    }
}


export type PropsType = {
    value: boolean
}