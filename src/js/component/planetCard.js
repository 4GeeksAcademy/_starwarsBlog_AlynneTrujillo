import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetCard = (props) => {
    const { store, actions } = useContext(Context);
    const [ info, setInfo] = useState([]);

    const planetInfo = () => {
        fetch(`https://www.swapi.tech/api/planets/${props.planet.uid}`)
            .then(response => response.json())
            .then(response => {
                setInfo(response.result.properties);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        planetInfo();
    },[])
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`}
                className="card-img-top" 
                alt="picture of a planet from Star Wars" />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <p> Climate: {info.climate}</p>
                <p> Terrain: {info.terrain}</p>
                <p> Diameter: {info.diameter}</p>
                <div className="buttons">
                    <Link to={`/planets/${props.planet.uid}`} />
                    <button type="button" className="btn btn-danger" onClick={() => {
                        actions.addToFavorites(props.planet.uid);
                    }}>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


// maybe add button to go back home?