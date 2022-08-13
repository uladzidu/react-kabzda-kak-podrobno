import React, {useMemo, useState} from 'react';
import './App.css'
import {UncontrolledOnOff} from './components/UncontroledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {ControlledOnOff} from './components/OnOff/ControlledOnOff';
import {Rating} from './components/Rating/Rating';
import {ControlledAccordion} from './components/Accordion/ControlledAccordion';
import {TestFile} from "./components/testFile";


export function App() {

    let [ratingValue, setRatingValue] = useState(4);
    let [onOffValue, setOnOffValue] = useState(false)
    let [accordionCollapsed,setAccordionCollapsed] = useState(false)

    console.log('APP')

    return (
        <div className="AppClassName">
            UncontrolledAccordion
            <UncontrolledAccordion />
            -----------------------------------------
            <br/>
            ControlledAccordion
            <ControlledAccordion title="--Menu--"
                                 collapsed={accordionCollapsed}
                                 setAccordionCollapsed = {setAccordionCollapsed} />
            -----------------------------------------
            <br/>
            UncontrolledRating
            <UncontrolledRating/>
            -----------------------------------------
            <br/>
            ControlledRating
            <Rating value={ratingValue} onClick={setRatingValue}/>
            -----------------------------------------
            <br/>
            ControlledOnOff
            <ControlledOnOff on={onOffValue} setOnOff={setOnOffValue}/>
            -----------------------------------------
            <br/>
            UncontrolledOnOff
            <UncontrolledOnOff/>
            -----------------------------------------
            <br/>
        </div>
    )
}
