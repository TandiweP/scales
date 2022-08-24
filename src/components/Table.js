
import React  from "react";

export default function Table ({handleSubmit}) {

return (
    
    <table className = "response">
        <thead>
        <tr>
            <th>Load #</th>
            <th>Gross</th>
            <th>Tare</th>
            <th>Net</th>
            <th>Tons</th>
        </tr>
        </thead>
        <tbody>
            {/* {
                handleSubmit.map((data, index) => {
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.gross}</td>
                            <td>{data.tare}</td>
                            <td>{data.net}</td>
                            <td>{data.tons}</td>
                        </tr>
                    )
            
       })
        } */}
        Weights
        </tbody>
    </table>
   )

}