import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);
    const [info, setInfo] = useState([]);

    const characterInfo = () => {
        fetch(`https://www.swapi.tech/api/people/${props.character.uid}`)
            .then(response => response.json())
            .then(response => {
                setInfo(response.result.properties);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        characterInfo();
    }, [])
    
    const onClickFav = (character) => {
        console.log(store.favorites);
        actions.handleFavorite(character)
    }
    
    const isFavorite = () => {
        console.log(store.favorites.includes(props.character));
        return store.favorites.includes(props.character)
    }
    
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`}
                className="card-img-top" alt="Picture of Star Wars Character" />
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <p> Gender: {info.gender}</p>
                <p> Hair color: {info.hair_color}</p>
                <p> Eye color: {info.eye_color}</p>
                <div className="linkButton">                
                    <Link to={`/people/${props.character.id}`} >More Info</Link>
                </div>
                <div className="likeButton">
                    <button type="button" className="btn btn-danger" onClick={() => {
                        onClickFav(props.character)
                    }}>
                        <i className={`fa-solid fa-heart ${isFavorite() ? "text-secondary" : ""}`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

// maybe add button to go back home?