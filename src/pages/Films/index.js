import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

function Films(){
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const promisse = axios.get(
        "https://mock-api.driven.com.br/api/v4/cineflex/movies"
        );
        promisse.then((response) => {
        setFilms(response.data);
        });
    }, []);

    if (!films[0]) {
        return "Um minuto, por favor!";
    } else {
        return (
        <div className="films">
            <h1>Selecione o  filme</h1>
            <div className="options-film">
            {films.map((film) => (
                <Link to={`/filme/${film.id}`}>
                    <div className="container-film">
                    <img src={film.posterURL} alt={film.title} />
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
  }
}

export default Films