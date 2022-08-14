import React, { useState } from "react";


export default function CalcWeights () {
const [emptyTruck, setEmptyTruck] = useState(0);
const [emptyPup, setEmptyPup] = useState(0);
const [loadedTruck, setLoadedTruck] = useState(0);
const [loadedPup, setLoadedPup] = useState(0);



        // let content = `
        //     <ul>
        //         <li>Gross: {gross}</li>
        //     </ul>
        // `;


const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        
        let gross = parseFloat(loadedTruck) + parseFloat(loadedPup);
        let tare = parseFloat(emptyTruck) + parseFloat(emptyPup);
        let net = (parseFloat(loadedTruck) + parseFloat(loadedPup)) - (parseFloat(emptyTruck) + parseFloat(emptyPup));
        let tons = ((parseFloat(loadedTruck) + parseFloat(loadedPup)) - (parseFloat(emptyTruck) + parseFloat(emptyPup))) / 2000;
        // let tare = emptyTruck + emptyPup;
        // let net = gross - tare;
        // let tons = net / 2000; 

        console.log(gross);
        console.log(tare);
        console.log(net);
        console.log(tons);

       

        //  return (
        //     document.body.innerHTML = content;
        //     document.getElementById('emptyTruck')
        // )

        // return (
        //     <div className = "response">
        //         <h1> Gross weight is {gross} </h1>
        //         <h1> Tare weight is {tare} </h1>
        //         <h1> Net weight is ${net} </h1>
        //         <h1> There are {tons} tons</h1>
        //     </div>

        // )
    }


return (
    
    <form className="form" type = "submit" onSubmit = {handleSubmit}>
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

        <button className = "submit-button">Submit</button>
    </form>
    
    
) 



}


