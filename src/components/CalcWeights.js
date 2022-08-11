import React, { useState } from "react";


export default function weightCalc () {
const [emptyTruck, setEmptyTruck] = useState(0);
const [emptyPup, setEmptyPup] = useState(0);
const [loadedTruck, setLoadedTruck] = useState(0);
const [loadedPup, setLoadedPup] = useState(0);

const submitForm = (event) => {
        console.log(event.target.value);
        console.log('submitted');
        let gross = loadedTruck + loadedPup;
        let tare = emptyTruck + emptyPup;
        let net = gross - tare;
        let tons = net / 2000; 

        return (
            <div className = "response">
                <h1> Gross weight is {gross} </h1>
                <h1> Tare weight is {tare} </h1>
                <h1> Net weight is ${net} </h1>
                <h1> There are {tons} tons</h1>
            </div>

        )
    }

return (
    <form className="form" onSubmit={submitForm}>
        <label>Empty Truck</label>
        <input
            className="empty-truck"
            id="empty-truck"
            value={emptyTruck}
            onChange={(e) => setEmptyTruck(e.currentTarget.value)} 
        />
        <label>Empty Pup</label>
        <input
            className = "empty-pup"
            id="empty-pup"
            value={emptyPup}
            onChange={(e) => setEmptyPup(e.currentTarget.value)} 
        />
        <label>Truck Loaded</label>
        <input
            className="loaded-truck"
            id="heavy-truck"
            value={loadedTruck}
            onChange={(e) => setLoadedTruck(e.currentTarget.value)} 
        />
        
        <label>Pup Loaded</label>
        <input
            className = "loaded-pup"
            id="heavy-pup"
            value={loadedPup}
            onChange={(e) => setLoadedPup(e.currentTarget.value)} 
        />

        <button className = "submit-button" >Submit</button>
    </form>
    
    
)



}


