import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { LoremIpsum } from 'react-lorem-ipsum';

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getOneCharacter(params.peopleId);
    }, []); 

    return (
        <div className="container">
            <div className="card" style={{ width: "100%" }}>
                <div className="row">
                    <div className="col">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.peopleId}.jpg`} // need to connect people id to character params 
                            className="card-img-top"
                            alt="Picture of Star Wars individual character" />
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
                            <h2 className="card-text"> Name: {store.character.name}</h2>
                            <p className="card-text">Date of Birth: {store.character.birth}</p>
                            <p className="card-text">Gender: {store.character.gender} </p>
                            <p className="card-text">Height: {store.character.height} </p>
                            <p className="card-text">Skin Color: {store.character.skin_color}</p>
                            <p className="card-text">Eye Color: {store.character.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};