import React, { useState } from "react";


export default function LightWeights () {
const [emptyTruck, setEmptyTruck] = useState("");
const [emptyPup, setEmptyPup] = useState("");
const [loadedTruck, setLoadedTruck] = useState("");
const [loadedPup, setLoadedPup] = useState("");



return (
    <form className="form">
        <input
            className="empty-truck"
            id="empty-truck"
            type="number"
            placeholder = "Truck/Trailer Empty"
            value={emptyTruck}
            onChange={(e) => setEmptyTruck(e.currentTarget.value)} 
        />
        
        <input
            className = "empty-pup"
            id="empty-pup"
            type="number"
            placeholder = "Pup Empty"
            value={emptyPup}
            onChange={(e) => setEmptyPup(e.currentTarget.value)} 
        />
        <input
            className="loaded-truck"
            id="heavy-truck"
            type="number"
            placeholder = "Truck/Trailer Loaded"
            value={loadedTruck}
            onChange={(e) => setLoadedTruck(e.currentTarget.value)} 
        />
        
        <input
            className = "loaded-pup"
            id="heavy-pup"
            type="number"
            placeholder = "Pup Loaded"
            value={loadedPup}
            onChange={(e) => setLoadedPup(e.currentTarget.value)} 
        />
    </form>
    
    
)



}


