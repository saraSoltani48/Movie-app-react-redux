import React, { Component } from "react";
import {connect} from "react-redux";
import {addMovie} from "../actions/Action";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import "../Css/Style.css"

class AddFilms extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      film: { description: "", rating: "", name: "", image: "",year:"",Edit:"",Remove:"",key:""}
    };
  }
  HandelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  SaveChange = ()=>{
    const film= {
        key: Date.now(),
        rating :this.state.rating ,
        name : this.state.name,
        Description :this.state.Description,
        image :this.state.image,
        year:this.state.year,
        Edit:this.state.Edit,
        Remove:this.state.Remove
    }
    this.props.addMovie(film)
    
}

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    console.log(this.state);
    return (
      <div>
        <Button className="addButton Add" color="success" onClick={this.toggle}>
          Add Movies
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader className="input" toggle={this.toggle}>
            New Film
          </ModalHeader>
          <ModalBody>
            <span>Title Movies</span>
            <Input
              className="input"
              placeholder="enter your title"
              type="text"
              id="name"
              onChange={e => this.HandelChange(e)}
            />
            <span>Images Movies</span>
            <Input
              className="input"
              placeholder="enter your image"
              type="text"
              id="image"
              onChange={e => this.HandelChange(e)}
            />
            <span>Rating</span>
            <Input
              className="input"
              placeholder="enter number of rate"
              type="text"
              id="rating"
              onChange={e => this.HandelChange(e)}
            />
            <span>Year of movies</span>
            <Input
              className="input"
              placeholder="Year of movie"
              type="text"
              id="year"
              onChange={e => this.HandelChange(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => { this.SaveChange();this.toggle();}}
              
              
            >
              Save change
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = { addMovie };
export default connect(null, mapDispatchToProps)(AddFilms);
