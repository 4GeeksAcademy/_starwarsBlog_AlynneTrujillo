import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { LoremIpsum } from 'react-lorem-ipsum';



export const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    
    useEffect(() => {
        actions.getOneVehicle(params.vehicleId); 
    }, []);
    
    return (
        <div className="container">
            <div className="card" style={{ width: "100%" }}>
                <div className="row">
                    <div className="col">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehicleId}.jpg`} //need to connect id to vehicle params?
                            className="card-img-top"
                            alt="Picture of Star Wars individual Vehicle" />
                    </div>
                    <div className="col">
                        <p><LoremIpsum
                            p={1} m={4} wordsPerSentence={5} random />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <h2>{store.vehicle.name}</h2>
                            <p className="card-text">Model: {store.vehicle.model}</p>  
                            <p className="card-text">Crew: {store.vehicle.crew}</p>
                            <p className="card-text">Pilots: {store.vehicle.pilots}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};