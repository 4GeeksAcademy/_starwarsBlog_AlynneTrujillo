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

    const onClickFav = (planet) => {
        actions.handleFavorite(planet)
    }

    const isFavorite = () => {
        return store.favorites.includes(props.planet)
    }
    
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
                <div className="linkButton">
                    <Link to={`/planets/${props.planet.uid}`} >More Info</Link>
                </div>
                <div>
                    <button type="likeButton" className="btn btn-danger" onClick={() => {
                        onClickFav(props.planet)
                    }}>
                        <i className={`fa-solid fa-heart ${isFavorite() ? "text-secondary" : ""}`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


// maybe add button to go back home?