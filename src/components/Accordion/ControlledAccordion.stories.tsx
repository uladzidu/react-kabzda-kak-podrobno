import React, {useState} from "react";
import {ControlledAccordion} from "./ControlledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'ControlledAccordion',
    component: ControlledAccordion
};

const callback = action('controlledAccordion mode was changed');

export const MenuCollapsedMode = () =>
    <ControlledAccordion title={'Menu'}
                         collapsed={true}
                         setAccordionCollapsed={callback}/>
;

export const UsersUnCollapsedMode = () =>
    <ControlledAccordion title={'Users'}
                         collapsed={false}
                         setAccordionCollapsed={callback}/>


export const ModeChanging = () => {

    const [value, setValue] = useState(true)

    return <ControlledAccordion title={'Menu'}
                                collapsed={value}
                                setAccordionCollapsed={setValue}/>
}







