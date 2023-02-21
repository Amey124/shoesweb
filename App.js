import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar'
import Imageslide from './images'
import Arrival from './arrival'
import Photo from './photos'
import Stores from './stores'
import Mis from './mis'
import Stars from './stars'

export default function App(){
    return(
        <div>
        <Navbar />
        <Imageslide />
        <Arrival />
        <Photo />
        <Stores />
        <Mis />
        </div>
    )
}