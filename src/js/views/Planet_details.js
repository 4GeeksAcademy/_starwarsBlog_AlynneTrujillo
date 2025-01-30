import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { LoremIpsum } from 'react-lorem-ipsum';

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getOnePlanet(params.planetId); 
    }, []);

    return (
        <div className="container">
            <div className="card" style={{ width: "100%" }}>
                <div className="row">
                    <div className="col">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`}
                            className="card-img-top"
                            alt="Picture of Star Wars individual planet" />
                    </div>
                    <div className="col">
                        <p><LoremIpsum
                            p={1} m={4} wordsPerSentence={5}random />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <h2>{store.planet.name}</h2>
                            <p className="card-text">Climate: {store.planet.climate}</p>
                            <p className="card-text">Terrain: {store.planet.terrain}</p>
                            <p className="card-text">Diameter: {store.planet.diameter}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};