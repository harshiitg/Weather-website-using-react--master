import React , {useState, useEffect} from "react"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Searchhistory from "./Components/Searchhistory";
import Details from "./Components/Details";



function App()
{
  
    const [weatherd,changedetail] = useState({
       
    });

    const [onchanged,onchangeedit] = useState("Paris");
    const [onchanged1,onchangeedit1] = useState("Paris");

    const [Cityhistory,changehistory] = useState([{"id":1,"city":"Kota"},{"id":2,"city":"Jaipur"},{"id":3,"city":"Delhi"},{"id":4,"city":"Guwahati"}]);
    const whenchanged = (e)=>{
        console.log(e.target.value);
        onchangeedit(e.target.value)
    }
     

    const changew = (a)=>{
      
        changedetail(prev => {
            return {...prev, ...a};
        })
    }

    const handleclick = (e)=>{
        e.preventDefault();
        onchangeedit1(onchanged);
    }
    
    const Historyclick = (id) =>{
       
        console.log("Here is the id of city you clicked  ",id);
        onchangeedit1(Cityhistory[id-1].city);

    }

   
      
      useEffect( ()=>{


       
        const fetchweather = async(x)=>{
          
          
            let a;
            await fetch("https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=1633ee45dab42d2924862451a4153da9&units=metric")
            .then(res => res.json())
            .then(result => {
              a = result;
            })

            if(a.cod === "404" || a.cod === '400')
            {
                alert("Please enter valid location ")
                return;
            }

            console.log(a);
             let b = {  country: a.name,
             Cloudy: a.clouds.all,
             Rain: "10%",
             Humidity: a.main.humidity,
             Wind: a.wind.speed,
             Temp: a.main.temp,
             Type: a.weather[0].main,
             icon: a.weather[0].icon};  

             changew(b);
        }
    
        fetchweather(onchanged1);
        let new_hist = [...Cityhistory];
            
        new_hist.pop();
        new_hist.unshift({"id":1,"city":onchanged1});

        for(let x=1; x<4; x++)
        {
           new_hist[x].id = x+1;
        }
        changehistory(new_hist);

     },[onchanged1] );

     const a = Cityhistory.map((props)=> <Searchhistory props = {props} id = {props.id} Historyclick ={Historyclick}/>)

     const refreshclick = (e)=>{
        e.preventDefault();
        const fetchweather1 = async(x)=>{
          
          
            let a;
            await fetch("https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=1633ee45dab42d2924862451a4153da9&units=metric")
            .then(res => res.json())
            .then(result => {
              a = result;
            })

            if(a.cod === "404")
            {
                alert("Error is loading content")
                return;
            }

            console.log(a);
             let b = {  country: a.name,
             Cloudy: a.clouds.all,
             Rain: "10%",
             Humidity: a.main.humidity,
             Wind: a.wind.speed,
             Temp: a.main.temp,
             Type: a.weather[0].main,
             icon: a.weather[0].icon};  

             changew(b);
        }
    
        fetchweather1(onchanged1);
       
     }
    
    return(
        <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
             <p id = "Heading">  What The Forecast?  </p>
    <div class="row d-flex justify-content-center">
        <div class="row card0">
            
            <div class="card1 col-lg-8 col-md-7">
            <button type="button" class="btn btn-default btn-sm">
            <i class="fa fa-refresh" aria-hidden="true"  onClick = {refreshclick}></i>
           </button>
          
                <div class="text-center"> 
                <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png" /> 
              

                </div>
                <div class="row px-3 mt-3 mb-3">
                    <h1 class="large-font mr-3">{weatherd.Temp}&#176;{"C"}</h1>
                    <div class="d-flex flex-column mr-3">
                        <h2 class="mt-3 mb-0">{weatherd.country}</h2> <small>{ Date().toLocaleString()}</small>
                    </div>
                    <div class="d-flex flex-column text-center">
                        <h3>
                    <img src ={`http://openweathermap.org/img/w/${weatherd.icon}.png`} alt="wthr img" width="50" height="50"/></h3>
                    <small>{weatherd.Type}</small>
                    </div>
                </div>
                
            </div>
            <div class="card2 col-lg-4 col-md-5">
            <div class="row px-3"> <input type="text" name="location" placeholder="Another location" class="mb-0"  onChange = {whenchanged} defaultValue = "Paris"/>
        <button class="fa fa-search mb-5 mr-5 text-center" onClick = {handleclick}></button>
            </div>
                <div class="mr-10">
                <ul class="list-group">
                     {a}
                     </ul>
                    <div class="line my-5"></div>
                    <p>Weather Details</p>
                  
                    <Details props = {weatherd} />
                   
                    <div class="line mt-3"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default App