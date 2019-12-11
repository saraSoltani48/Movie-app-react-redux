import React, { Component } from "react";
import "./Css/Style.css"
import Movies from "./components/Movies";
import Search from "./components/Search";
import AddFilms from "./components/AddFilms";
import ListMovie from "./components/ListMovie";
import Ratingmovies from "./components/SearchRate";
import { connect } from "react-redux";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Details from "./components/Details"



const App = props => {

//  const filterStar = count => ({
//     rate: count
//   });

console.log(props)
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Ratingmovies clicked={true}
        // count={props.rating}
        // filterStar={filterStar} 
        />
      <Switch>
      
      <Route  exact path="/" render={()=>
      <>
      <Movies
        tableMovie={props.movie.filter(
          el =>
            el.name
              .toLowerCase()
              .includes(props.find.toLowerCase()) &&
              el.rating >= props.rating
        )}
        />
        <AddFilms />
        </>}/>
      <Route  path="/Details/:key" component={Details}/>
      

      
      <ListMovie />
      </Switch>
      </BrowserRouter>
    </div>
  );
};

const MSTP = state => ({
  movie: state.MovieList,
  find: state.UserInput,
  rating: state.rate
});

export default connect(MSTP)(App);
