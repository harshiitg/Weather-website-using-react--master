import React from "react"
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


function Searchhistory({props,id,Historyclick})
{
    return(
      
        <div class="list-group-item light-text suggestion" onClick = {()=>Historyclick(props.id)}  >{props.city}</div>
      

    )
}

export default Searchhistory