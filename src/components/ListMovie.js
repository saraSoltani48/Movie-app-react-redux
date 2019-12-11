import React, { Component } from "react";
import {connect} from "react-redux";

class ListMovie extends Component {
  render() { 
    return (
      <div>
          {/* <div>
        {this.props.series.filter(el =>
          el.name
            .toLowerCase()
            .includes(this.props.find.toLowerCase().trim())
        )}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  series: state.MovieList,
  find: state.UserInput
});
export default connect(mapStateToProps)(ListMovie);
