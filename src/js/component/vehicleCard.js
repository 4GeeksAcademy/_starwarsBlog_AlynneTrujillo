import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = (props) => {
    const { store, actions } = useContext(Context);
    const [ info, setInfo ] = useState([]);

    const vehichleInfo = () => {
        fetch(`https://www.swapi.tech/api/vehicles/${props.vehicle.uid}`)
            .then(response => response.json())
            .then(response => {
                setInfo(response.result.properties);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        vehichleInfo();
    },[])

    const onClickFav = (vehicle) => {
        actions.handleFavorite(vehicle)
    }

    const isFavorite = () => {
        return store.favorites.includes(props.vehicle)
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`}
                className="card-img-top" alt="Picture of Star Wars Character" />
            <div className="card-body">
                <h5 className="card-title">{props.vehicle.name}</h5>
                <p> Model: {info.model}</p>
                <p> Manufacturer: {info.manufacturer}</p>
                <p> Passengers: {info.passengers}</p>
                <div className="linkButton">
                    <Link to={`/vehicles/${props.vehicle.uid}`} >More Info</Link>
                </div>
                <div>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        onClickFav(props.vehicle)
                    }}>
                        <i className={`fa-solid fa-heart ${isFavorite() ? "text-secondary" : ""}`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

