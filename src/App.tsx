import React, {useState} from 'react';
import './App.css'
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {ControlledOnOff} from './components/OnOff/ControlledOnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';


let [ratingValue, setRatingValue] = useState(4)

export function App() {
    return (
        <div className="AppClassName">
            <UncontrolledOnOff/>
            <UncontrolledAccordion title="--Menu--"/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <ControlledOnOff on={false}/>
        </div>
    )
}
