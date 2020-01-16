import React, {useState} from 'react';
import Carmodel from './Carmodel';

const CarmodelList = () => {

    const [cars, setCar]= useState([
        {
            brand: "BMW",
            model: "335i",
            price: 200000

        },
        {
            brand: "Aston Martin",
            model: "Vanquish",
            price: 233000  
        },
        {
            brand: "Toyota",
            model: "Prius",
            price: 150000
        }

        
    ]);
    return( 
        <div>{cars.map(car => (
               < Carmodel brand={car.brand}/>
            ))}
        </div>

    );
       
        
    
};

export default CarmodelList;
