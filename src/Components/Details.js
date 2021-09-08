import React from "react"
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


function Details({props})
{
    return (
        
        <div>
        <div class="d-flex">
        <p class="light-text mr-auto p-2">Cloudy</p>
        
        <p class="p-2">{props.Cloudy+"%"}</p>
    </div>
    <div class="d-flex">
        <p class="light-text mr-auto p-2">Rain</p>
        
        <p class="p-2">{props.Rain}</p>
    </div>
    <div class="d-flex">
        <p class="light-text mr-auto p-2">Humidity</p>
        
        <p class="p-2">{props.Humidity+ "%"}</p>
    </div>
    <div class="d-flex">
        <p class="light-text mr-auto p-2">Wind</p>
        
        <p class="p-2">{props.Wind+ "m/s"}</p>
    </div>
    </div>
    )
}

export default Details