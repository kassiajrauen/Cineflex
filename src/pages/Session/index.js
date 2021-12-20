import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Session() {
  const [infoSessions, setInfoSessions] = useState(undefined);
  const { idFilm } = useParams();

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilm}/showtimes`
    );
    promisse.then((response) => {
      setInfoSessions(response.data);
    });
  }, [idFilm]);
  
  if (infoSessions === undefined) {
    return "Ops, só um minutinho!";
  } 
  else {
    return (
      <div className="films">
        <h1>Selecione o horário</h1>
        {infoSessions.days.map((infos) => {
          console.log(infos)
          return (
            <>
              <div className="day">{`${infos.weekday} - ${infos.date}`}</div>
              <div className="container-sections">
                {infos.showtimes.map((time) => {
                  return (
                    <Link to={`/sessao/${time.id}`}>
                      <div className="section">{time.name}</div>
                    </Link>
                  );
                })}
              </div>
            </>
          );
        })}
        <Footer infoSessions={infoSessions}/>
      </div>
    );
  }
}

function Footer({infoSessions}) {
  return (
    <div className="footer">
      <div className="container-film-footer">
        <img src={infoSessions.posterURL} alt={infoSessions.title} />
      </div>
      <p>{infoSessions.title}</p>
    </div>
  );
}

export default Session