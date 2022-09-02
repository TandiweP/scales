import React, { useState } from "react";



export default function CalcWeights () {
const [emptyTruck, setEmptyTruck] = useState(0);
const [emptyPup, setEmptyPup] = useState(0);
const [loadedTruck, setLoadedTruck] = useState(0);
const [loadedPup, setLoadedPup] = useState(0);
// const [gross, setGross] = useState(0);
// const [tare, setTare] = useState(0);
// const [net, setNet] = useState(0);
// const [tons, setTons] = useState(0);


        // let content = `
        //     <ul>
        //         <li>Gross: {gross}</li>
        //     </ul>
        // `;


const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        
        const truck = document.getElementById("truck");
        const gross = parseFloat(loadedTruck) + parseFloat(loadedPup);
        const tare = parseFloat(emptyTruck) + parseFloat(emptyPup);
        const net = (parseFloat(loadedTruck) + parseFloat(loadedPup)) - (parseFloat(emptyTruck) + parseFloat(emptyPup));
        const tons = ((parseFloat(loadedTruck) + parseFloat(loadedPup)) - (parseFloat(emptyTruck) + parseFloat(emptyPup))) / 2000;
        // let tare = emptyTruck + emptyPup;
        // let net = gross - tare;
        // let tons = net / 2000; 
        console.log(truck.value)
        console.log(gross);
        console.log(tare);
        console.log(net);
        console.log(tons);
        

        
            
    //    return (
    
    //     <table className = "response">
    //         <tr>
    //             <th>Gross</th>
    //             <th>Tare</th>
    //             <th>Net</th>
    //             <th>Tons</th>
    //         </tr>
    //         <tr>
    //             <td>{gross}</td>
    //             <td>{tare}</td>
    //             <td>{net}</td>
    //             <td>{tons}</td>
    //         </tr>
    //     </table>
    //    )
        // return (
                
        //  <div className = "response">
        //          <h1> Gross weight is {gross} </h1>
        //          <h1> Tare weight is {tare} </h1>
        //         <h1> Net weight is ${net} </h1>
        //         <h1> There are ${tons} tons</h1>
        //      </div>

        //  )
    }


return (

    <form className="form" type = "submit" onSubmit = {handleSubmit}>
        <label for="truck">Please Select A Truck </label>
        <select name="truck" id="truck">
            <option value="example">--Please Select a Vehicle--</option>
            <option value="2">#2</option>
            <option value="10">#10</option>
            <option value="14">#14</option>
            <option value="15">Dino</option>
            <option value="16">#16</option>
            <option value="18">#18</option>
            <option value="flatbed">Flatbed With 5th Wheel</option>
            
        </select>

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
