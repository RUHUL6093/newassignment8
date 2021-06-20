import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import male from "../TeamDetails/image/male.png";
import female from "../TeamDetails/image/female.png";
import "./TeamDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faIndent,
  faGenderless,
  faBaseballBall
} from "@fortawesome/free-solid-svg-icons";
import facebookIcon from "./icon/Facebook.png";
import twitterIcon from "./icon/Twitter.png";
import youTubeIcon from "./icon/YouTube.png";
import { Link } from "react-router-dom";

const TeamDetailes = () => {
  const { idTeam } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(...data.teams));
  }, [idTeam]);

  const {
    strCountry,
    strGender,
    strSport,
    intFormedYear,
    strTeam,
    strTeamBadge
  } = details;
  const gender = strGender;
  return (
    <>
      <div className="team-details-heading container">
        <div className="header-img">
          <img className="img-fluid" src={strTeamBadge} alt="" />
        </div>
      </div>

      <div className="container details-part">
        <div className="team-details-content row">
          <div className="half-details col-md-6 col-12">
            <h2>{strTeam}</h2>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faIndent} /> Founded: {intFormedYear}
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faBaseballBall} /> Sport Type: {strSport}
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faGenderless} /> Gender: {strGender}
            </h4>
          </div>
          <div className="half-details col-md-6 col-12">
            {gender ? (
              <img className="img-fluid" src={male} alt="" />
            ) : (
              <img className="img-fluid" src={female} alt="" />
            )}
          </div>
        </div>
        <div className="team-details-description">
          <p>
            The three leagues below the Premier League are known as the
            Championship, League One and League Two, normally with 24 clubs in
            each division (72 in total; in the 2019–20 season, League One was
            reduced to 23 following the expulsion of Bury). Promotion and
            relegation between these divisions is a central feature of the
            League and is further extended to allow the top Championship clubs
            to exchange places with the lowest-placed clubs in the Premier
            League, and the bottom clubs of League Two to switch with the top
            clubs of the National League, thus integrating the League into the
            English football league system. Although primarily a competition for
            English clubs, clubs from Wales – currently Cardiff City, Swansea
            City and Newport County – also take part, while in the past Wrexham,
            Merthyr Town and Aberdare Athletic have been members. The Football
            League was associated with a title sponsor between 1983 and 2016. As
            this sponsor changed over the years the league too has been known by
            various names.[1] Starting with the 2016–17 season, the league has
            moved away from having a title sponsor, re-branding itself as the
            English Football League (EFL), in much the same way the Premier
            League is known as the "EPL" internationally.[2]
          </p>
        </div>
        <div className="footer-item">
          <Link
            to={{ pathname: `https://www.facebook.com/${strTeam}` }}
            target="_blank"
          >
            {" "}
            <img src={facebookIcon} alt="" />{" "}
          </Link>
          <Link
            to={{ pathname: `https://www.twitter.com/${strTeam}` }}
            target="_blank"
          >
            {" "}
            <img src={twitterIcon} alt="" />{" "}
          </Link>
          <Link
            to={{ pathname: `https://www.youtube.com/${strTeam}` }}
            target="_blank"
          >
            {" "}
            <img src={youTubeIcon} alt="" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamDetailes;
