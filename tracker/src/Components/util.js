import React from 'react'
import numeral from 'numeral'
import {Popup, Circle} from 'react-leaflet'
const casesColor = {
    cases:{
         hex: '#00ff00',
         multiplier: 800
    },
    deaths:{
        hex: '#ff0000',
         multiplier: 800
    },
    recovered:{
        hex: '#00ff00',
         multiplier: 800

    }
};

export const sortData = (data) =>{
    const sortedData = [...data]
    return sortedData.sort((a,b)=>(a.cases>b.cases?-1:1))
}
export const showDataOnMap=(data,casesType='cases')=>(
     data.map(country=>(
        <Circle
        center={[country.countryInfo.lat,country.countryInfo.long]}
        fillOpacity={0.4}
        ></Circle>
     )
     )
     

)