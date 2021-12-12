import React from 'react';
import './App.css'
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';


export function App() {
    return (
        <div className = 'AppClassName'>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title='--Menu--'/>
            <UncontrolledRating/>
        </div>
    )
}

function PageTitle(props: PagePropsType) {
    return <h1>{props.title}</h1>
}


type PagePropsType = {
    title: string
}