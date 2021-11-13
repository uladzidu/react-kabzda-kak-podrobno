import React from 'react';
import './App.css'
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';


export function App() {
    return (
        <div>
            <OnOff/>
            <UncontrolledAccordion title='--Menu--'/>
            <UncontrolledAccordion title='--User--'/>
        </div>
    )
}

function PageTitle(props: PagePropsType) {
    return <h1>{props.title}</h1>
}


type PagePropsType = {
    title: string
}