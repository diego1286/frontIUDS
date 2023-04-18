import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//import Map from './components/mapas/maps';
//import credentials from './components/mapas/credentials';

//const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />,
    /*
    <Map
    googleMapURL=  {mapURL} 
    containerElement={<div style={{height:'400%'}}/>}
    mapElement= {<div style={{height:'100%'}}/>}
    
    /> */

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
