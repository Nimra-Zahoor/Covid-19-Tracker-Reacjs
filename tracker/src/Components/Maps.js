import React from 'react'
import { useMap as LeafletMap,TileLayer,Marker,Popup,MapContainer } from 'react-leaflet'
import './Maps.css'
function Maps({center,zoom}) {
  const position = [51.505, -0.09]
  return (
    <div className='map'>
    <MapContainer  center={center}  zoom={zoom}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   
  </MapContainer>
    </div>
  
  )
}

export default Maps