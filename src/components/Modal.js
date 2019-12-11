import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { EditMovie } from "../actions/Action";

class MyModal extends Component {
  state = {
    modal: false,
    movie: {
      name: this.props.MyFilms.name,
      year: this.props.MyFilms.year,
      image: this.props.MyFilms.image,
      key: this.props.MyFilms.key
    }
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  ChangeName = e => {
    this.setState({
      movie: {
          ...this.state.movie,
        [e.target.id]: e.target.value
      }
    });
  };
  render() {
    const { image, year, name} = this.props.MyFilms;
    return (
      <div>
        <button
          class="btn btn-outline-success"
          color="success"
          onClick={this.toggle}
        >
          Edit
        </button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input
              //   placeholder="enter your title"
              defaultValue={name}
              type="text"
              id="name"
              onChange={e => this.ChangeName(e)}
            />
            <Input
              //   placeholder="enter your title"
              defaultValue={image}
              type="text"
              id="image"
              onChange={e => this.ChangeName(e)}
            />
            <Input
              //   placeholder="enter your title"
              defaultValue={year}
              type="text"
              id="year"
              onChange={e => this.ChangeName(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.EditMovie(this.state.movie);

                this.toggle();
              }}
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
const mapDispatchToProps = { EditMovie };

export default connect(null, mapDispatchToProps)(MyModal);
