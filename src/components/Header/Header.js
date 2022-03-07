import './Header.css';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import Card from'./Card';
// import MovieForm from '../MovieForm/MovieForm';
import React, {Component} from 'react';



export default function Header() {
    
    const history = useHistory();
    
    function moveHome() {
        console.log('moved');
        history.push('/home');
    }


    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},

    ]
    return (
    <div id="header">
    <Carousel breakPoints={breakPoints}>
        <Card number=''/>
        <Card number=''/>
        <Card number=''/>
        <Card number=''/>
        <Card number=''/>
        <Card number=''/>
        <Card number=''/>
    </Carousel>





        <h1 id="movie-saga"><span id='click-move'
        onClick={moveHome}
        >watch saga</span></h1>
    </div>
    )
}