import React, { useState } from "react";


export default function LightWeights () {
const [emptyTruck, setEmptyTruck] = useState("");
const [emptyPup, setEmptyPup] = useState("");

return (
    <form className="form-empty">
        <input
            className="empty-truck"
            type="number"
            placeholder = "Truck/Trailer Empty"
            value={emptyTruck}
            onChange={(e) => setEmptyTruck(e.currentTarget.value)} 
        />
        
        <input
            classname = "empty-pup"
            type="number"
            placeholder = "Pup Empty"
            value={emptyPup}
            onChange={(e) => setEmptyPup(e.currentTarget.value)} 
        />
    </form>
)


}