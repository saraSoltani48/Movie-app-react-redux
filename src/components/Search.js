import React from "react";
// import "./Style.css";
import {connect} from "react-redux";
import {SearchMovie} from "../actions/Action";
import { FormControl, Button, Form, Navbar } from "react-bootstrap";

const Search = props => {
  return (
    <div>
      <Navbar bg="light"  expand="lg">
        <Form inline >
          <FormControl type="text"  placeholder="Search for your favorite films..." className="mr-sm-2 search"
          onChange={(e)=>props.SearchMovie(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      
      </Navbar>
    </div>
  );
};


const mapDisatchToProps={SearchMovie}
export default connect (null,mapDisatchToProps) (Search);
