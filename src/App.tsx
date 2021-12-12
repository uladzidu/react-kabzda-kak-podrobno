import React from 'react';
import './App.css'
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {ControlledOnOff} from './components/OnOff/ControlledOnOff';


export function App() {
    return (
        <div className = 'AppClassName'>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title='--Menu--'/>
            <UncontrolledRating/>
            <ControlledOnOff on={false}/>
        </div>
    )
}
