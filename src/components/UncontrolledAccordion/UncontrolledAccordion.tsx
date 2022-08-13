import React, {useReducer} from 'react'
import {reducer} from "./Reducer";

type AccordionTitlePropsType = {
    title : string
    onClick : () => void
}

export function UncontrolledAccordion() {

    console.log('UncontrolledAccordion')
   // let [collapsed, setCollapsed] = useState(true);
    let [collapsed, dispatch] = useReducer(reducer, true);

        return (
            <div>
                <AccordionTitle title={'Menu'} onClick={ () => {dispatch({type : 'TOGGLE'})} } />
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

function AccordionTitle(props : AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick} >{props.title}</h3>
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