import React from "react"


type AccordionPropsType = {
    title : string
    collapsed : boolean
}

export function Accordion(props : AccordionPropsType) {
    if (props.collapsed === true) {
        return (
        <div>
            <AccordionTitle title = {props.title} />
            <AccordionBody />
        </div>
    )} else {
        return (
            <div>
                <AccordionTitle title = {props.title} />
            </div>
        )
    }
}

function AccordionTitle(props : any) {
    return (
        <h3>{props.title}</h3>
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