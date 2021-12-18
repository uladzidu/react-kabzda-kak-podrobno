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
        backgroundColor: props.onOff ? 'limegreen' : 'red'
    }
    const buttonOff = {
        height: '40px',
        width: '70px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.onOff ? 'white' : 'red'
    }
    const buttonOn = {
        height: '40px',
        width: '70px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.onOff ? 'limegreen' : 'white'
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

type PropsType = {
    onOff: boolean
    setOnOff: (on: boolean) => void
}