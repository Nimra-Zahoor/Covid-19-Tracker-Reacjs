import React, {useState,useEffect} from 'react';

import './App.css';
import {Select, MenuItem, FormControl} from '@material-ui/core'
function App() {
  const [countries, setcountries] = useState([])
  useEffect(()=>{ 
    const getcountriesData = async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data)=>{  
       
        const countries = data.map((country)=>(
          {
          name:country.country,
          value: country.countryInfo.iso2,
        }
        ));
        setcountries(countries);
  
      });
    };
    getcountriesData();
  },[countries])
  return (
    <div>
    <div className='app_header'>
    <h1>COVID-19 TRACKER </h1>
     <FormControl className="app_dropdown">
     <Select variant= "outlined" value = "">
    
    
    


     </Select>

     </FormControl>
    </div>
    
    </div>
  );
}

export default App;
