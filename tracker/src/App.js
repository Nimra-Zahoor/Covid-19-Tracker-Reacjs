import React, {useState,useEffect} from 'react';
import InfoBox from './Components/infoboxes'
import Maps from './Components/Maps'
import './App.css';
import Table from './Components/Table'
import {Select, MenuItem, FormControl,Card,CardContent} from '@material-ui/core'
import { sortData } from './Components/util';
import LineGraph from './Components/LineGraph';
function App() {
  const [countries, setcountries] = useState([])
  const [country,setCountry]   = useState('WorldWide');
  const[countryInfo,setCountryInfo]= useState({})
  const [tableData,setTableData] = useState([])

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response=>response.json())
    .then((data)=>{
    setCountryInfo(data);
    })
  },[])
 
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
        const sortedData = sortData(data)
        setcountries(countries);
        setTableData(sortedData)
      });
    };
    getcountriesData();
  },[]);

  const onCountryChange = async(event) => {
    const countryCode = event.target.value;

    const url = countryCode === "Worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
      .then(res => res.json())
      .then(data => {
        
        setCountry(countryCode);
        setCountryInfo(data);
       
      })

}; 


  return (
    <div className='app'>
    <div className='app__left'>
    <div className='app_header' >
    <h1>COVID-19 TRACKER </h1>
     <FormControl className="app_dropdown">
     <Select variant= "outlined" value = {country} onChange={onCountryChange}>
     <MenuItem value="WorldWide"> WorldWide </MenuItem>
     {
      countries.map((country)=>(<MenuItem value={country.value}> {country.name} </MenuItem>))
      }
     </Select>
     </FormControl>
    </div>
    <div className='app__stats'>
     <InfoBox title="CoronaVirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases}/>
     <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered}/>
     <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths}/>

    </div>
    <div>
      <Maps/>
    </div>
    
    </div>
    
   <div className='app__right'>
   <Card>
            <CardContent>
                <h3>Live Cases by countries</h3>
               
                <Table countries={tableData}/>
                <h3>Worldwide new cases</h3>
            <LineGraph casesType={casesType} />
            </CardContent>
        </Card>
        
   </div>
    
    
    </div>
  );
}

export default App;
