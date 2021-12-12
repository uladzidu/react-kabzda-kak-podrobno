import React, {useState} from 'react'


export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false);


    const circle = {
        height: '20px',
        width: '20px',
        border: '1px solid black',
        borderRadius: '50px',
        marginLeft: '15px',
        display: 'inline-block',
        marginTop: '50px',
        backgroundColor: on ? 'limegreen' : 'red'
    }
    const buttonOff = {
        height: '40px',
        width: '70px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }
    const buttonOn = {
        height: '40px',
        width: '70px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'limegreen' : 'white'
    }
    return (
        <div>
            <button style={buttonOn} onClick={() => {setOn(true)}}>On
            </button>
            <button style={buttonOff} onClick={() => {setOn(false)}}>Off</button>
            <button style={circle}></button>
        </div>
    )

}

type PropsType = {
    // on: boolean
}