import React from "react";
import { connect } from "react-redux";
import {DeleteMovie} from "../actions/Action";
import MyModal from "./Modal";
import "../Css/Style.css"
import Ratingmovies from "./SearchRate";
import {Link} from "react-router-dom";
const Movies = props => {
  return (
    <div className="myFilms">
      {props.tableMovie.map((el, i) => (
        <div className="cards" key={el.key}>
          <img className="image" src={el.image} />
          <p>{el.name}</p>
          <p>{el.year}</p>
        
          <Ratingmovies count={el.rating} clicked={false } />

        <Link to={`/Details/${el.key}`}> 
          <button type="button" class="btn btn-outline-primary description ">
            See More
          </button></Link> 
          <div className="Edit-Remove">
           
               <MyModal MyFilms={el}/>
           
            <button type="button" class="btn btn-outline-danger" onClick={()=>{props.DeleteMovie(el.key)}}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps={DeleteMovie}
export default connect(null,mapDispatchToProps)(Movies);
