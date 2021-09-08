import React from "react"
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


function Search()
{
    return(
        <div class="row px-3"> <input type="text" name="location" placeholder="Another location" class="mb-0" />
        <div class="fa fa-search mb-5 mr-5 text-center"></div>
    </div>
    )
}

export default Search