import React, { useEffect } from "react";
import { useState } from "react";
import Team from "../Components/Team/Team";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <>
      <div>
        <div className="container banner-img ">
          <h1>Football Team Selection</h1>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="card-bg row row-cols-1 row-cols-md-3 bg-4 team-board">
            {teams.map((team) => (
              <Team team={team}></Team>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
