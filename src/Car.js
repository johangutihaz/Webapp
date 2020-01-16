import React from 'react';
import "./App.css";
import CarPic from './car.png';

//clicked(){
//    console.log( call deleteCarmodel.js);
//<button onClick={ (e) => {e.defaultPrevented; this.clicked();} }> Delete </button>


function Car(props){


    return(
        <div className="car">
            <h3>{props.brand}</h3>
            <img src={CarPic} alt="" align="right" width="150" height="80" ></img>
            <p>Model: {props.model}</p>
            <p>Price: {props.price} kr</p>
            <button onClick> Buy </button>
            <button onClick> Delete </button>
       </div>
        
    );
}


export default Car;