import React, {useState} from 'react'


type UncontrolledAccordion = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordion) {

    let [collapsed, setCollapse] = useState(true);

    if (!collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <button onClick={() => {
                    setCollapse(true)}}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <button onClick={() => {setCollapse(false)}}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )
    }

}

function AccordionTitle(props: AccordionTitlePropsType) {
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