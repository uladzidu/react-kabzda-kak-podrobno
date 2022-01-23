import React, {useState} from "react";
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title : 'ControlledOnOff' ,
    component : ControlledOnOff
};

const callback = action('on or off was clicked')

export const OnMode = () => <ControlledOnOff on={true} setOnOff={callback}/>
export const OffMode = () => <ControlledOnOff on={false} setOnOff={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
return <ControlledOnOff on={value} setOnOff={setValue}/>
}





