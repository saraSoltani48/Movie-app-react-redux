import React from "react";
import "../Css/Style.css";
import { connect } from "react-redux";
import { SearchStar } from "../actions/Action";
const Ratingmovies = ({ count,countStar, SearchStar, clicked }) => {

    let countLocal=0
    clicked? countLocal= countStar:countLocal=count
  console.log("c", count);
  let tabStart = [];

  for (let i = 0; i < 5; i++) {
    if (i < countLocal) {
      tabStart.push(
        <span
          style={{ cursor: "pointer" }}
          key={i}
          onClick={() => {
            clicked && SearchStar(i + 1);
          }}
        >
          ★
        </span>
      );
    } else {
      tabStart.push(
        <span
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => (clicked ? SearchStar(i + 1) : null)}
        >
          ☆
        </span>
      );
    }
  }
  return <div className="starts">{tabStart}</div>;
};

const MDTP = { SearchStar };
const mapStateToProps = state => ({
  countStar: state.rate
});
export default connect(mapStateToProps, MDTP)(Ratingmovies);
