import React, {useState} from "react";

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return <> <input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    return <> <input/>
        <button onClick={() => {
            
        }}>save
        </button>
        - actual value : {value} </>
}


export const ControlledInput = () => <input value={'it-inkubator.by'}/>

