
import React  from "react";

export default function Table (props) {

return (
    
    <table className = "response">
        <tr>
            <th>Gross</th>
            <th>Tare</th>
            <th>Net</th>
            <th>Tons</th>
        </tr>
        <tr>
            <td>{props.gross}</td>
            <td>{props.tare}</td>
            <td>{props.net}</td>
            <td>{props.tons}</td>
        </tr>
    </table>
   )

}