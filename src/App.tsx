import React, {useState} from 'react';
import './App.css'
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {ControlledOnOff} from './components/OnOff/ControlledOnOff';
import {Rating} from './components/Rating/Rating';
import {ControlledAccordion} from './components/Accordion/ControlledAccordion';



export function App() {

    let [ratingValue, setRatingValue] = useState(4);
    let [onOff, setOnOff] = useState(false)
    let [accordionCollapsed,setAccordionCollapsed] = useState(false)

    return (
        <div className="AppClassName">
            <UncontrolledOnOff/>
            <UncontrolledAccordion title="--Menu--"/>
            <ControlledAccordion title="--Menu--"
                                 collapsed={accordionCollapsed}
                                 setAccordionCollapsed = {setAccordionCollapsed} />
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <ControlledOnOff on={onOff} setOnOff={setOnOff}/>
            <UncontrolledOnOff/>
        </div>
    )
}
