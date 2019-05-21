import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import store from "../../store";
import { searchAction } from "../../actions/face.actions";

import "./search.css";

class Search extends Component {
  onChangeHandler = event => {
    Array.from(event.target.files).forEach(file => {
      var reader = new FileReader();
      if (!file.type.match(/image-*/)) {
        console.error("Wrong format, upload a .jpg or .png image file please");
        return;
      }
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    });
  };

  _handleReaderLoaded(e) {
    var imageBase64Str = e.target.result;
    store.dispatch(searchAction(imageBase64Str));
  }

  render() {
    return (
      <div>
        <h1>
          <i className="fa fa-fw fa-search" /> Search
        </h1>
        <hr />
        <Alert variant="success">
          <br />
          <br />
          <h4 className="text-center">
            <i className="fa fa-fw fa-upload" /> <b>Upload an image</b>
          </h4>
          <hr />
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <br />
        </Alert>
        {this.props.face.matchedFace !== undefined && (
          <div className="face">
            <h1>FACE | MATCHED</h1>
            <pre>{JSON.stringify(this.props.face.matchedFace, 0, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    face: state.faceReducer
  };
};

export default connect(mapStateToProps)(Search);
