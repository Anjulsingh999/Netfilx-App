import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Cardsdata from './Cardsdata'

function ncard(val) {
    // console.log(val);
    return (
        <Card
            key={val.id}
            imgsrc={val.imgsrc}
            mname={val.moviesName}
            movieslink={val.link}
        />
    )
}

function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="cards">
                    {Cardsdata.map(ncard)}
                </div>
            </div>
        </>
    )
}

export default App;