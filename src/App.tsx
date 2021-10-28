import React from 'react';
import './App.css'


export function App() {
    return (
        <div>
            Hey
            <Accordion/>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Меню</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}