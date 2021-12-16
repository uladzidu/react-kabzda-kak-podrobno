import React from 'react'


type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

export function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.setAccordionCollapsed(!props.collapsed)}}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}