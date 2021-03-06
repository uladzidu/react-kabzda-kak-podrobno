import React, {useState} from 'react'


type AccordionTitlePropsType = {
    title: string
    onClick : () => void
}

type UncontrolledAccordionPropsType = {
    title : string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true);

        return (
            <div>
                <AccordionTitle title={props.title} onClick={ () => {setCollapsed(!collapsed)} } />
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {props.onClick()} }>{props.title}</h3>
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