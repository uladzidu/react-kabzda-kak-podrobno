import React from 'react'


type PropsType = {
    on: boolean
    setOnOff: (on: boolean) => void
}

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
            <button style={buttonOn} onClick={() => {props.setOnOff(true)}}>On
            </button>
            <button style={buttonOff} onClick={() => {props.setOnOff(false)}}>Off
            </button>
            <button style={circle}/>
        </div>
    )
}

