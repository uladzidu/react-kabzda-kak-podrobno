import React from 'react'


export const ControlledOnOff = (props: PropsType) => {

    const circle = {
        height: '20px',
        width: '20px',
        border: '1px solid black',
        borderRadius: '50px',
        marginLeft: '15px',
        display: 'inline-block',
        marginTop: '50px',
        backgroundColor: props.on ? 'limegreen' : 'red'
    }
    const buttonOff = {
        height: '40px',
        width: '70px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const buttonOn = {
        height: '40px',
        width: '70px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'limegreen' : 'white'
    }
    return (
        <div>
            <button onClick={()=>{props.setOnOff(props.on)}}>On</button>
            <button onClick={()=>{props.setOnOff(!props.on)}}>Off</button>
            <button style={circle}/>
        </div>
    )

}

type PropsType = {
    on: boolean
    setOnOff : (on: boolean) => void
}