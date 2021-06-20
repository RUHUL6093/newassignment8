import React from "react";
import { useHistory } from "react-router";
import "./Team.css";

const TeamBoard = (props) => {
  const { idTeam, strTeam, strSport, strTeamBadge } = props.team;

  const history = useHistory();
  const showDetailes = (idTeam) => {
    const url = `teamDetailes/${idTeam}`;
    history.push(url);
  };
  return (
    <div className="col team-board-content">
      <div className="container">
        <div className="card">
          <div className="team-img">
            <img
              className="img-fluid w-50 mx-auto mt-2"
              src={strTeamBadge}
              alt=""
            />
          </div>
          <div className="card-body">
            <h2>{strTeam}</h2>
            <p>Sport type: {strSport}</p>
            <button
              onClick={() => showDetailes(idTeam)}
              className="btn btn-primary"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBoard;
