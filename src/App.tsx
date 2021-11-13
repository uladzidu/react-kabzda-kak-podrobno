import React from 'react';
import './App.css'
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';


export function App() {
    return (
        <div>
            <Accordion title="Menu" collapsed={true}/>
            <Accordion title="Users" collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

function PageTitle(props: PagePropsType) {
    return <h1>{props.title}</h1>
}


type PagePropsType = {
    title: string
}