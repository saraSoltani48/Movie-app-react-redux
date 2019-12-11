import React from "react";
import {connect} from "react-redux"
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import "../Css/Style.css";
function Details(props) {
  
  const [movie ]  = props.detailsFilms.filter(
    el =>  el.key === Number(props.match.params.key)
  );
console.log(movie.name)
  return (
    <div>
      <Link to="/" >
					<FontAwesome className="fas fa-angle-double-left angle " />
				</Link>

      <h1 className="movieName">{movie.name} </h1>
      <iframe className="iframe" src={movie.trailer}></iframe>
    </div>
  );
}

const MSTP = state => ({
  detailsFilms: state.MovieList
});
export default connect(MSTP)(Details);
