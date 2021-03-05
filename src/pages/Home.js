import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import Course from '../components/Course';

//lets build a function that will render the home page
export default function Home() {
    return (
        <div>
            <Banner />
            <Highlights />
            <Course />
        </div>
    )
}